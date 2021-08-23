# React material Snippet

Snippet for developers using material UI with react

## Authors

-   [@luongdeveloper](https://github.com/luongdeveloper)

## Snippet

#### Material React Snippet

```javascript
// m-alert
<Alert severity="success">content</Alert>
```

---

```javascript
// m-alert-tt
<Alert severity="info">
    <AlertTitle>title</AlertTitle>
    content
</Alert>
```

---

```javascript
// m-chip
<Chip variant="default" label="content" color="default" />
```

---

```javascript
// m-btn
<Button variant="contained" color="inherit">
    content
</Button>
```

---

```javascript
// m-radio
<RadioGroup value={value}>
    <FormControlLabel control={<Radio value={value} color={"default"} />} label="content" />
</RadioGroup>
```

---

```javascript
// m-check-box
<FormControlLabel control={<Switch checked={true} color={"default"} />} label="content" />
```

---

```javascript
// m-switch
<FormControlLabel control={<Checkbox checked={true} color={"default"} />} label="content" />
```

---

```javascript
// m-fbtn
<Fab variant="circular" color="inherit">
    <AddIcon />
</Fab>
```

---

```javascript
// m-input
<TextField variant="filled" color="primary" label="label" />
```

---

```javascript
// m-accor
<Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>title</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Typography>content</Typography>
    </AccordionDetails>
</Accordion>
```

---

```javascript
// m-c-progress
<CircularProgress color="primary" variant="determinate" />
```

---

```javascript
// m-l-progress
<LinearProgress color="primary" variant="determinate" />
```

---

```javascript
// m-backdrop
<Backdrop open={true}>
    <CircularProgress color="primary" variant="determinate" />
</Backdrop>
```

---

```javascript
// m-backdrop
<Backdrop open={true}>
    <CircularProgress color="primary" variant="determinate" />
</Backdrop>
```

---

```javascript
// m-avt
<Avatar variant="circle">content</Avatar>
```

---

```javascript
// m-avt-img
<Avatar variant="circle" src={link} />
```

---

```javascript
// m-gavt
<AvatarGroup max={max}>
    <Avatar variant="circle">content</Avatar>
</AvatarGroup>
```

---

```javascript
// m-gavt-img
<AvatarGroup max={max}>
    <Avatar variant="circle" src={link} />
</AvatarGroup>
```

---

```javascript
// m-badge
<Badge badgeContent={value} color="primary">
    icon
</Badge>
```

---

```javascript
// m-divi
<Divider />
```

---

```javascript
// m-tt
<Tooltip title={title} arrow>
    cpn
</Tooltip>
```

---

```javascript
// m-typo
<Typography variant="h1" color="inherit">
    content
</Typography>
```

---

```javascript
// m-tr-co
<Collapse in={true} timeout={timeout}>
    cpn
</Collapse>
```

---

```javascript
// m-tr-gr
<Grow in={true} timeout={timeout}>
    cpn
</Grow>
```

---

```javascript
// m-tr-zo
<Zoom in={true} timeout={timeout}>
    cpn
</Zoom>
```

---

```javascript
// m-tr-sl
<Slide direction="up" in={true} timeout={timeout}>
    cpn
</Slide>
```

---

```javascript
// m-input-suggest
<Autocomplete
    options={arrayData}
    getOptionLabel={(option) => label}
    renderInput={(params) => <TextField {...params} label="label" variant="filled" />}
/>
```

---

```javascript
// m-paging
<Pagination count={total} color="primary" />
```

---
