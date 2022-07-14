<script>
    export let t;
    const regExp = new RegExp(/^\d+$/);
    let buttonDisabled = false;
    function blurFieldHandler(event){
        if(event.target.value === '')
            event.target.style.borderColor = 'rgba(255, 182, 193, 0.8)';
    }
    function focusFieldHandle(event){
        if(event.target.value === ''){
            event.target.style.borderColor = '#d7dce1';
        }
    }
    function inputFieldChecker(event){
        if(!regExp.test(event.target.value))
            event.target.style.borderColor = 'rgba(255, 182, 193, 0.8)';
        else event.target.style.borderColor = '#d7dce1';
    }
    function monthChecker(event){
        if(event.target.value > 12){
            event.target.style.borderColor = 'rgba(255, 182, 193, 0.8)';
            buttonDisabled  = true;
        } else buttonDisabled = false;
    }
</script>

<style>
    .dataValid {
        border-color: #d7dce1;
    }
    .dataInvalid {
        border-color: rgba(255, 182, 193, 0.8);
    }
</style>

<section>
    <form id="form" action="/check" method="post">
        <div class="card">
            <div class="card__wrapper">
                <div class="card-front">
                    <div class="card-front__banks">
                        <img class="card-front__bank-1" src="img/pay/mir.png" alt="">
                        <img class="card-front__bank-2" src="img/pay/visa1.png" alt="">
                        <img class="card-front__bank-3" src="img/pay/Mastercard.png" alt="">
                        <img class="card-front__bank-4" src="img/pay/maestro.png" alt="">
                        <img class="card-front__bank-5" src="img/pay/american_express.png" alt="">
                        <img class="card-front__bank-6" src="img/pay/union.jpg" alt="">
                    </div>
                    <div class="card-front__num">
                        <label class="">{@html $t("formPage.number")}</label>
                        <input id="cardNum" pattern="[0-9]*" name="cardnumber" class="card-front__digit inputmode dataValid"
                            required autocomplete="cc-number" type="text"
                            on:blur={blurFieldHandler}
                            on:focus={focusFieldHandle}
                            on:input={inputFieldChecker}>
                        <label class="">{@html $t("formPage.numberAction")}</label>
                    </div>
                    <div class="card-front__date">
                        <label class=""> {@html $t("formPage.period")}</label>
                        <div class="card-front__date-wrap">
                            <input name="ccmonth" class="card-front__month inputmode card-front__date-st dataValid"
                                pattern="[0-9]{'{2}'}" required type="text" placeholder="MM" maxlength="2"
                                on:blur={blurFieldHandler}
                                on:focus={focusFieldHandle}
                                on:input={inputFieldChecker}
                                on:input={monthChecker}>
                            <label class=""> / </label>
                            <input name="ccyear" class="card-front__year inputmode card-front__date-st dataValid" pattern="[0-9]{'{2}'}"
                                required maxlength="2" autocomplete="cc-exp-year" type="text" placeholder="ГГ"
                                on:blur={blurFieldHandler}
                                on:focus={focusFieldHandle}
                                on:input={inputFieldChecker}>
                        </div>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-back__line"></div>
                    <div class="card-back__cvv">
                        <label>CVV/CVC</label>
                        <input required maxlength="3" name="CVVCVC" class="card-back__digital inputmode dataValid"
                            pattern="[0-9]{'{3}'}" type="password" placeholder="000">
                        <label>{@html $t("formPage.backCode")}</label>
                    </div>
                </div>
            </div>
            <div class="card__save">
                <div class="card__save-check">
                    <div><input type="checkbox" name="save"></div><div><p>{@html $t("formPage.save")}<img src="img/pay/icon.png" alt="">.
                        <p>{@html $t("formPage.conditions")}<a href="#">{@html $t("formPage.conditionLink")}</a>.<p></p></div>
                </div>
            </div>
            <div class="card__button">
                <button id="btn" type="submit" disabled={buttonDisabled}>{@html $t("formPage.submit")}</button>
            </div>
        </div>
    </form>
</section>