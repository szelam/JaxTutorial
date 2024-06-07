import React from 'react';
import { TagPill, TagDeleteButton, TagImg } from './styles';
import { Close } from '@mui/icons-material';

export default function Tag({ name = '', onDelete = () => { } }) {
    return (
        <TagPill>
            {name}
            <TagImg src="/img/24.png" />
            <TagDeleteButton onClick={onDelete}>
                <Close fontSize='small' color="primary" />
            </TagDeleteButton>
        </TagPill>
    );
}