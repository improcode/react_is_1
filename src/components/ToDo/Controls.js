import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import Container from '../UI/Container'


const Control = ({onChangeHandler, newTaskValue, onClickHandler}) => (
    <Container>
        <TextField
            onChange={onChangeHandler}
            value={newTaskValue}
            name={'new-task'}
            placeholder={'New Task'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
    </Container>
)

export default Control