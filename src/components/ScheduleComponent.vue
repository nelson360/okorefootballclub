<template>
<br><br><br><hr>
<div class="title">schedule</div>
<br><br><br>

<div class="schedule">
    <div class="caption"></div>
    <div class="tableheader"></div>
    <div class="header-cell">Date</div>
    <div class="header-cell">Games</div>
    <div class="header-cell">Results</div>
    <div class="header-cell">Venue</div>
    <div class="table-body">
        <div class="table-row">

            <div class="body-cell">OCT 28</div>
            <div class="body-cell">Okore fc v Nawa fc</div>
            <div class="body-cell"> 1-1</div>
            <div class="body-cell">Home</div>
        </div>
        <div class="table-row">
            <div class="body-cell">NOV 2</div>
            <div class="body-cell">Okore fc v Manyatta fc</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">Home</div>
        </div>
        <div class="table-row">
            <div class="body-cell">NOV 5</div>
            <div class="body-cell">Bandani Fc v Okore FC</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">Away</div>
        </div>
        <div class="table-row">
            <div class="body-cell">NOV 11</div>
            <div class="body-cell">Arrow fc v Okore fc</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">Away</div>
        </div>
        <div class="table-row">
            <div class="body-cell">NOV 17</div>
            <div class="body-cell">Otonglo fc v Okore FC</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">Away</div>
        </div>
        <div class="table-row">
            <div class="body-cell">NOV 21</div>
            <div class="body-cell">Okore fc v Nyawita Fc</div>
            <div class="body-cell"> 1-1</div>
            <div class="bodycell">Home</div>
        </div>

    </div>

    <div class="table-footer">DATE
        <div class="footer-cell">GAMES</div>
        <div class="footer-cell">RESULTS</div>
        <div class="footer-cell">VENUE</div>
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
