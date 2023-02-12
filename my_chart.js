const ctx = document.getElementById('myChart').getContext('2d');
const myChart2 = document.getElementById('myChart2').getContext('2d');

new Chart(ctx, {
type: 'polarArea',
data: {
    labels: ['충정엔지니어링부', '청량엔지니어링부', '신내엔지니어링부', '고양엔지니어링부', '강원엔지니어링부'],
    datasets: [{
    label: '구축완료 물량',
    data: [120, 190, 93, 75, 82],

    }]
},
options: {
    responsive: true,
}
});

new Chart(myChart2, {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      datasets: [{
        label: '구축완료 물량',
        data: [120, 190, 153, 125, 172, 233, 182, 201, 124, 174, 169, 129],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(154, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(154, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
      }]
    },
    options: {
       responsive: true,
    }
  });