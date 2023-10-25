$(function () {
    $('#S_inp, #U_inp, #C_inp').keyup(function () {
        var S = $('#S_inp');
        var U = $('#U_inp');
        var C = $('#C_inp');
        $('#D_out').val((Number(S.val()) * Number(U.val()) * (Number(C.val()) * 0.1)) * 1.2);
        $('#P_out').val(((Number(S.val()) * Number(U.val()) * (Number(C.val()) * 0.1)) * 1.2) - (Number(S.val()) * Number(U.val()) * (Number(C.val()) * 0.1)));
        $('#G_out').val((Number(U.val()) * (Number($('#D_out').val()) - (Number(S.val()) * Number(U.val()) * (Number(C.val()) * 0.1)))));
        $('#L_out').val(S.val())
        $('#Summ_out').val(Number(S.val())*300)
    })
});