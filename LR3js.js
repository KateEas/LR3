 function numbers_N() {
    let numb = Number(document.getElementById('numb_n').value);
    var list_of_numbers = [];
    for (let i = 0; i < numb; i++) {
        let number_for_push=Number(prompt('number'));
        if (isNaN(number_for_push)){
            number_for_push=Number(prompt('Вы ввели не число, исправьте'))
        }
        else{
            list_of_numbers.push(number_for_push);
        }   
    }
    alert(list_of_numbers)
    comb_sort(list_of_numbers) //сортировка расческой
    different_numbers(list_of_numbers) 
}
function bubble_sort(array_of_numbers) {//сортировка пузырьком
    numb = array_of_numbers.length
    for (let i = 0; i < numb; i++) {
        for (let g = 0; g < numb - 1; g++) {
            if (array_of_numbers[g] > array_of_numbers[g + 1]) {
                let vrem_numb = array_of_numbers[g + 1]
                array_of_numbers[g + 1] = array_of_numbers[g]
                array_of_numbers[g] = vrem_numb
            }
        }
    }
    alert(array_of_numbers)
}
function comb_sort(list_of_number) {//сортировка расческой
    let i_max = list_of_number.length;
    i_max--;
    while (i_max > 0) {
        for (let i = 0; i + i_max <= list_of_number.length - 1; i++) {
            if (list_of_number[i] > list_of_number[i + i_max]) {
                let sort_numb = list_of_number[i + i_max];
                list_of_number[i + i_max] = list_of_number[i]
                list_of_number[i] = sort_numb;
            }
        }
        i_max = Math.floor(i_max / 1.247)
    } 
    alert('Окончательный список: ' + list_of_number)
}
function different_numbers(list_of_number) {
    var list_resalt = 'Итог: '
    for (let i = 0; i < list_of_number.length; i++) {
        if (list_of_number[i] != list_of_number[i + 1]) {
            list_resalt += (' ' + list_of_number[i]);
        }
        else {
            list_resalt.slice(i, 1);
            g = Number(i);
            count_i = 0;
            while (list_of_number[g] == list_of_number[g + 1]) {
                count_i++;
                g++;
            }
            i += count_i;
        }
    }
    alert(list_resalt)
}
//два варианта решения
function number_A(){
    let a = Number(document.getElementById('numb_n').value);
    let n= (Number(prompt('number N')));
    let sum_a=0;
    for (let i=n;i>=0;i--){
        sum_a+=Math.pow(a,i);
    }
    alert(sum_a)
}
function number_A2(){
    let a = Number(document.getElementById('numb_n').value);
    let n= (Number(prompt('number N')));
    let sum_a=1;
    var all_sum=0;
    var count_n=n;
    while (count_n>=0){
        if (n>0){
            sum_a=sum_a*a;
            n--;
        }
        else{
            all_sum+=1;
            sum_a=0;
        }
        all_sum+=sum_a;
        count_n--;
    }
    alert('Сумма равна: '+ all_sum)
}