/*
 * @file component deskmark
 */

import React from "react";
import PropTypes from "prop-types";
import CreateBar from "../CreateBar";
import List from "../List";
import ItemShowLayer from "../ItemShowLayer";
import ItemEditor from "../ItemEditor";

import "./style.scss";

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

class Deskmark extends React.Component {
  componentDidMount() {
    this.props.actions.fetchEntryList();
  }

  render() {
    const { state, actions } = this.props;
    const { isEditing, selectedId } = state.editor;
    const detailedEntries = state.entries.detail;

    const entryList = state.entries.list.data;

    const entry =
      (selectedId &&
        detailedEntries[selectedId] &&
        detailedEntries[selectedId].data) ||
      null;

    const mainPart = isEditing ? (
      <ItemEditor
        item={entry}
        onSave={actions.saveEntry}
        onCancel={actions.cancelEdit}
      />
    ) : (
      <ItemShowLayer
        item={entry}
        onEdit={actions.editEntry}
        onDelete={actions.deleteEntry}
      />
    );

    return (
      <section className="deskmark-component">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <a className="navbar-brand" href="#">
            Deskmark App
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-4 list-group">
              <CreateBar onClick={actions.createNewEntry} />
              <List items={entryList} onSelect={actions.selectEntry} />
            </div>
            {mainPart}
          </div>
        </div>
      </section>
    );
  }
}

Deskmark.propTypes = propTypes;

export default Deskmark;
