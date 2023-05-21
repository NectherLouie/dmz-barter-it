import { AppBar, Box, Dialog, DialogContent, DialogContentText, IconButton, List, ListItem, Paper, Toolbar, Typography, styled } from '@mui/material';
import './style.css';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h6,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'auto',
    lineHeight: '60px',
    wordWrap: true
}));

export default function BarterDialog(props) {

    const recipes = props.recipes;
    
    var items = [];
    var recipeList = [];

    recipes.forEach((item, index) => {
        items.push(
            <Item key={index} elevation={8}>
                {item.label}
                {
                    item.recipe.forEach((rec, ind) => {
                        recipeList.push(
                            <ListItem key={ind}>
                                <Typography sx={{ fontWeight:600, ml: 2, flex: 1 }} variant="body2" component="div">
                                    {rec}
                                </Typography>
                            </ListItem>
                        );
                    })
                }
                <List>
                    {recipeList}
                </List>
            </Item>
        );
        recipeList = [];
    })

    return (
        <Dialog
            fullScreen
            open={props.open}
            onClose={props.onClose}
            aria-labelledby='responsive-dialog-title'
            TransitionComponent={props.transitionComponent}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Typography sx={{ fontWeight:600, ml: 2, flex: 1 }} variant="h6" component="div">
                        {props.title}
                    </Typography>

                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={props.onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent className='dialog-content'>
                <DialogContentText>
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                            gap: 2,
                        }}
                    >
                        {items}
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
      );
}