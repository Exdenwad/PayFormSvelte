<script>
    import Header from "../Components/FormPage/Header.svelte";
    import NewCardForm from "../Components/FormPage/NewCardForm/NewCardForm.svelte";
    import SavedCardLine from "../Components/FormPage/SavedCardLine/SavedCardLine.svelte";
import SavedCardPay from "../Components/FormPage/SavedCardPay/SavedCardPay.svelte";
    import WaterMarks from "../Components/FormPage/WaterMarks/WaterMarks.svelte";
    const cardsArray = [
        {number: '123123123', validityPeriod: {month: '04', year: '2203'}, cvccvv: '301',},
        {number: '123126787', validityPeriod: {month: '01', year: '3454'}, cvccvv: '201',},
        {number: '932843223', validityPeriod: {month: '04', year: '2031'}, cvccvv: '101',},
    ];
    let actionFrom = 'newcard';
</script>

<svelte:head>
    <link href="http://fonts.cdnfonts.com/css/bambino-2" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</svelte:head>


<div class="wrapper">
    <Header />
    <SavedCardLine cardsArray={cardsArray} bind:actionFrom={actionFrom} />
    {#if actionFrom === 'newcard'}
    <NewCardForm />
    {:else}
        <SavedCardPay cardInfo={cardsArray[actionFrom]} />
    {/if}
    <WaterMarks />
</div>