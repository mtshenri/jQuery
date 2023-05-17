$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#inserir-tarefa').val();
        const tarefa = $('<li></li>');
        $(`<li>${nomeTarefa}</li>`).appendTo(tarefa);
        $(tarefa).appendTo('ul');
        $('#inserir-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluido');
    })
})