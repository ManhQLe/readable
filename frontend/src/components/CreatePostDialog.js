import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import CreatePost from './CreatePost'
import { BelizeHole, Carrot, Turquoise, Silver } from './colors'

export default class CreatePostDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allowSubmit: false
        }

    }

    onDataChanged=(data)=>{
        const {title,body,category} = data;
        this.setState({
            allowSubmit: title.length && body.length && category.length
        })
    }

    onButtonClicked = (act) => {
        const { onAction = () => { } } = this.props;
        onAction(act, act === "SUBMIT" ? this.refs.FORM.getCurrentData() : null)
    }

    render() {
        const { open, onAction,categories=[],category } = this.props;
        const {allowSubmit} = this.state

        const actions = [
            <FlatButton disabled={!allowSubmit}
                onClick={()=>this.onButtonClicked("SUBMIT")}
                label="Submit" labelStyle={{ color: allowSubmit ? Turquoise : Silver }}
            />,
            <FlatButton onClick={()=>this.onButtonClicked("CLOSE")} label="Close" labelStyle={{ color: Carrot }} />
        ]

        return (
            <Dialog
                actions={actions}
                title="Create Post"
                modal={false}
                open={open}
                autoScrollBodyContent={true}
            >
                <CreatePost ref="FORM" category={category} onDataChanged={this.onDataChanged} categories={categories}/>
            </Dialog>
        )
    }


}