function getNext() {
    let num = Number(document.getElementById('num').value);
    let result = hailStoneSeq(num);


    function hailStoneSeq(n){
        let seq = n + " ";

        while(n !== 1){
            if(n % 2 === 0){
                n = (n / 2);
            }else{
                n = ((n * 3) + 1);
            }

            seq += (n + " " );
        }

        return seq;
    }

    let resultEl = document.getElementById('result');
    resultEl.textContent = result;
}