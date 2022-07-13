<svelte:head>
    <link href="http://fonts.cdnfonts.com/css/bambino-2" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/savecard.css">
</svelte:head>

<script>
    export let cardInfo;
    function createFormAndSend(){
        const form = document.createElement('form');
        const input = document.createElement('input');
        form.method = 'POST';
        form.action = '/check';
        input.value = cardInfo.number;
        input.name = 'cardnumber';
        form.append(input);
        document.body.append(form);
        form.submit();
    }
</script>

<div class="wrapper">
    <section>
       
            <div class="card">
                <div class="card__wrapper">
                    <div class="card__front">
                        <div class="card__banks">
                            <img class="card__bank-1" src="img/saveCard/sberwhite.png" alt="">
                            <img class="card__bank-2" src="img/saveCard/visawhite.png" alt="">
                        </div>
                        <div class="card__num">
                            <p class="card__digit"> •••• •••• •••• {cardInfo.number.slice(-4)}</p>
                        </div>
                        <div class="card__date">
                            <div class="card__date-wrap">
                                <p class=" card__date-dt ">Действует до</p>
                                <p class=" card__date-st ">{cardInfo.validityPeriod.month.slice(-2)} / {cardInfo.validityPeriod.year.slice(-2)}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card__back">
                        <div class="card__back-line">
                        </div>
                    </div>
                </div>
                <div class="card__button">
                    <button id="btn" type="submit" on:click={createFormAndSend}>Пополнить</button>
                </div>
            </div>
    </section>
</div>