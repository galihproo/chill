// let sourceSwap = function () {
//     let $this = $(this);
//     let newSource = $this.data('alt-src');
//     $this.data('alt-src', $this.attr('src'));
//     $this.attr('src', newSource);
// }

// $(document).ready(function() {
//     $('.btn-modal').on('click', function() {

//         $('#modalStorage').on('show.bs.modal', function(e){
//             $("#ic-storage").attr('src', 'assets/images/ic-storage-hover.svg');
//             $(".ic-modal-storage").toggleClass('d-none');
//             console.log('buka');
//         });

//         $('#modalStorage').on('hide.bs.modal', function(e){
//             $("#ic-storage").attr('src', 'assets/images/ic-storage.svg');
//             $(".ic-modal-storage").toggleClass('d-none');
//             console.log('tutup');
//         });
        
//     });
// });

// $(document).ready(function() {
//     // $('img.icon').hover(sourceSwap, sourceSwap);
//     /* $("img.icon").hover(function(){
//         $(this).attr("src", function(index, attr){
//             return attr.replace(".svg", "-hover.svg");
//         });
//     }, function(){
//         $(this).attr("src", function(index, attr){
//             return attr.replace("-hover.svg", ".svg");
//         });
//     }); */
// });

(function(){
    //Show Modal
    $('.modal').on('show.bs.modal', function (e) {
        console.log('show');
        $('.bg-content').addClass('modalBlur');
    })
    
    //Remove modal
    $('.modal').on('hide.bs.modal', function (e) {
        console.log('hide');
        $('.bg-content').removeClass('modalBlur');
    })
})();