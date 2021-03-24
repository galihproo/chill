// let sourceSwap = function () {
//     let $this = $(this);
//     let newSource = $this.data('alt-src');
//     $this.data('alt-src', $this.attr('src'));
//     $this.attr('src', newSource);
// }

// $(document).ready(function() {
//     $('.btn-modal').on('click', function() {
//         // if($('#modalStorage').show()) {
//             // $("#ic-storage").hover(sourceSwap, sourceSwap);
//             // $("#ic-storage").attr('src', 'assets/images/ic-storage-hover.svg');
//         // }

//         $('#modalStorage').on('show.bs.modal', function(e){
//             // $("#ic-storage").attr('src', 'assets/images/ic-storage-hover.svg');
//             $("#ic-storage").attr("src", function(index, attr){
//                 return attr.replace(".svg", "-hover.svg");
//             });
//             console.log('buka');
//         });

//         $('#modalStorage').on('hide.bs.modal', function(e){
//             // $("#ic-storage").attr('src', 'assets/images/ic-storage.svg');
//             $("#ic-storage").attr("src", function(index, attr){
//                 return attr.replace("-hover.svg", ".svg");
//             });
//             console.log('tutup');
//         });
        
//     });
// });

$(document).ready(function() {
    // $('img.icon').hover(sourceSwap, sourceSwap);
    $("img.icon").hover(function(){
        $(this).attr("src", function(index, attr){
            return attr.replace(".svg", "-hover.svg");
        });
    }, function(){
        $(this).attr("src", function(index, attr){
            return attr.replace("-hover.svg", ".svg");
        });
    });
});

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