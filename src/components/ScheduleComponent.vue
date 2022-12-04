<template>
<br><br><br><hr>
<div class="title underline">schedule</div>
<br><br><br>

<div class="schedule">
    <div class="caption"></div>
    <div class="tableheader"></div>
    <div class="header-cell">Date</div>
    <div class="header-cell">Game</div>
    <div class="header-cell">result</div>
    <div class="header-cell">Venue</div>
    <div class="table-body">
        <div class="table-row">

            <div class="body-cell">cell 1-1</div>
            <div class="body-cell">cell 1-2</div>
            <div class="body-cell"> 1-1</div>
            <div class="body-cell">cell 1-3</div>
        </div>
        <div class="table-row">
            <div class="body-cell">cell 1-1</div>
            <div class="body-cell">cell 1-2</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">cell 1-3</div>
        </div>
        <div class="table-row">
            <div class="body-cell">cell 1-1</div>
            <div class="body-cell">cell 1-2</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">cell 1-3</div>
        </div>
        <div class="table-row">
            <div class="body-cell">cell 1-1</div>
            <div class="body-cell">cell 1-2</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">cell 1-3</div>
        </div>
        <div class="table-row">
            <div class="body-cell">cell 1-1</div>
            <div class="body-cell">cell 1-2</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">cell 1-3</div>
        </div>
        <div class="table-row">
            <div class="body-cell">cell 1-1</div>
            <div class="body-cell">cell 1-2</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">cell 1-3</div>
        </div>

    </div>

    <div class="table-footer">footer tings
        <div class="footer-cell">Footer1</div>
        <div class="footer-cell">Footer2</div>
        <div class="footer-cell">Footer3</div>
    </div>

</div>
<br><br>
</template>

<script>
export default {
    name: 'ScheduleComponent',

}
</script>

<style>
.schedule {
    display: table;
    height: 100%;
    width: 100%;

}

.caption {
    display: table-caption;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}

.tableheader {
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
    font-size: 25px;
}

.header-cell {
    display: table-cell;
    padding: 10px;
    text-align: justify;
    border-bottom: 1px solid black;
}

.table-body {
    display: table-row-group;
}

.table-row {
    display: table-row;
}

.body-cell {
    display: table-cell;
}

.table-footer {
    display: table-footer-group;
    background-color: gray;
    font-weight: bold;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.45);
}

.footer-cell {
    display: table-cell;
    padding: 10px;
    text-align: justify;
    border-bottom: 1px solid black;
}
</style>
