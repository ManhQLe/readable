import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Alizarin, Carrot, SunFlower, Emerald, PeterRiver } from './colors'
import SortIcon from 'material-ui/svg-icons/content/sort'
import PropTypes from 'prop-types';


class SortToolbar extends Component {
    constructor(props) {
        super(props);
    }

    onSortChanged = (v) => {
        const { onSortCommand = () => { } } = this.props;
        onSortCommand(v, true);
    }

    onDirectionChanged = (v) => {
        const {asc, onSortCommand = () => { } } = this.props;
        const sdir = !asc;
        onSortCommand(v, sdir);

    }

    render() {
        const { sortBy = null, sortCommands,asc } = this.props        
        const c = sortCommands.find(x => x.command === sortBy)


        return <div style={{ display: "inline-flex", alignItems: "center" }}>
            <IconMenu
                onChange={(e, v) => this.onSortChanged(v)}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                iconStyle={{
                    color: Carrot
                }}
                iconButtonElement={<IconButton>
                    {(c && c.icon) ||
                        <SortIcon />
                    }
                </IconButton>}
            >
                {
                    sortCommands.map(s => {
                        return <MenuItem key={s.command} value={s.command} primaryText={s.title}
                            leftIcon={s.icon}
                        />
                    })
                }
            </IconMenu>
            <FlatButton onClick={() => this.onDirectionChanged(c.command)}>
                {
                    (
                        c &&
                        <span> {c.title} &nbsp;
                            <i className={asc ? "fa fa-long-arrow-down" : "fa fa-long-arrow-up"}
                                style={{color:PeterRiver}}
                                aria-hidden="true"></i>
                        </span>
                    )
                    || ""
                }
            </FlatButton>
        </div>
    }
}


SortToolbar.propTypes = {
    sortCommands: PropTypes.array.isRequired,
    sortBy: PropTypes.string,
    onSortCommand: PropTypes.func
}

export default SortToolbar;