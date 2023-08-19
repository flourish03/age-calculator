const result_year = document.querySelector(".result-year");
const result_month = document.querySelector(".result-month");
const result_day = document.querySelector(".result-day");
const submit_btn = document.querySelector(".submit-btn");

let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

const error_year = document.querySelector(".erroryear");
const error_month = document.querySelector(".errormonth");
const error_day = document.querySelector(".errorday");

const span_year = document.querySelector(".span-year");
const span_month = document.querySelector(".span-month");
const span_day = document.querySelector(".span-day");



submit_btn.addEventListener('click', CalculateDate);

input_day.addEventListener('input', e =>{
    if (+input_day.value > 31) {
        input_day.style.borderColor = `red`;
        span_day.style.color =`red`;
     error_day.textContent = "Must be a valid date";

        isValid = false;
        
        return;
    } else {
        isValid = true;
        error_day.textContent = "";
    

    }
    if (+input_day.value === 0) {
        isValid = false;
        input_day.style.borderColor = `red`;
         span_day.style.color =`red`
        error_day.textContent = "This field is required";
        isValid = false;
        return;
    } else{
        input_day.style.borderColor = `black`
        span_day.style.color = `black`;
        error_day.textContent = "";
    }

})

input_month.addEventListener('input', e =>{
    if (+input_month.value > 12) {
        input_month.style.borderColor = `red`
        span_month.style.color = `red`;

        error_month.textContent = "Must be a valid date";

        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";
        
 }
    if (+input_month.value === 0) {
        isValid = false;
        input_month.style.borderColor = `red`
        span_month.style.color = `red`;
        error_month.textContent = "This field is required";
        isValid = false;
        return;
    } else{
        input_month.style.borderColor = `black`
        span_month.style.color = `black`;
        error_month.textContent = "";
    }

})

input_year.addEventListener('input', e =>{
    if (+input_year.value > 2023) {
        input_year.style.borderColor = `red`
        span_year.style.color = `red`;
        error_year.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";
    

    }
    if (+input_year.value === 0) {
        isValid = false;
        input_year.style.borderColor = `red`
        span_year.style.color = `red`;
        error_year.textContent = "This field is required";
        isValid = false;
        return;
    } else{
        input_year.style.borderColor = `black`
        span_year.style.color = `black`;
        error_year.textContent = "";
    }

})



function CalculateDate() {
    if (isValid) {
        const birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        const birthdayObj = new Date(birthday);
        const ageDiffMill = Date.now() - birthdayObj.getTime();
        const ageDate = new Date(ageDiffMill);
        const ageYears = ageDate.getUTCFullYear() - 1970;
        const ageMonths = ageDate.getUTCMonth();
        const ageDays = ageDate.getUTCDate() - 1;

        result_day.textContent = ageDays;
        result_month.textContent = ageMonths;
        result_year.textContent = ageYears;

        // Store age data in local storage
        const ageData = {
            years: ageYears,
            months: ageMonths,
            days: ageDays
        };
        localStorage.setItem('userAge', JSON.stringify(ageData));
    } else {
        alert("Please fix the input errors.");
    }
}

        function Get() {
            const val = localStorage.getItem('userAge');
            if (val === null) {
                alert('Age data not found in local storage');
            } else {
                const ageData = JSON.parse(val);
                const years = ageData.years;
                const months = ageData.months;
                const days = ageData.days;
        
                // Display the retrieved age data
                p.innerHTML = `Years: ${years}, Months: ${months}, Days: ${days}`;
            }
        }
        