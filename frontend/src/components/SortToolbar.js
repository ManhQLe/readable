import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Carrot, PeterRiver } from './colors'
import SortIcon from 'material-ui/svg-icons/content/sort'
import PropTypes from 'prop-types';


function SortToolbar(props) {

    const onSortChanged = (v) => {
        const { onSortCommand = () => { } } = props;
        onSortCommand(v, true);
    }

    const onDirectionChanged = (v) => {
        const { asc, onSortCommand = () => { } } = props;
        const sdir = !asc;
        onSortCommand(v, sdir);

    }

    const { sortBy = null, sortCommands, asc } = props
    const c = sortCommands.find(x => x.command === sortBy)


    return <div style={{ display: "inline-flex", alignItems: "center" }}>
        <IconMenu
            onChange={(e, v) => onSortChanged(v)}
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
        <FlatButton onClick={() => onDirectionChanged(c.command)}>
            {
                (
                    c &&
                    <span> {c.title} &nbsp;
                            <i className={asc ? "fa fa-long-arrow-down" : "fa fa-long-arrow-up"}
                            style={{ color: PeterRiver }}
                            aria-hidden="true"></i>
                    </span>
                )
                || ""
            }
        </FlatButton>
    </div>

}


SortToolbar.propTypes = {
    sortCommands: PropTypes.array.isRequired,
    sortBy: PropTypes.string,
    onSortCommand: PropTypes.func
}

export default SortToolbar;