let updateTotalCost = function(ele) {
  let cost = parseFloat($(ele).children('.cost').children('span').text());
  let quantity = parseFloat($(ele).find('.quantity input').val());
  let totalCost = cost * quantity;

  $(ele).children('.totalCost').html('$' + totalCost);
  return totalCost;
}


$(document).ready(function() {
  let totalPriceCost = [];
  $('tbody tr').each(function(i, ele) {
    let totalCost = updateTotalCost(ele);
    totalPriceCost.push(totalCost);
  });

  $(document).on('click', '.btn.remove', function(event) {
    $(this).closest('tr').remove();
    updateTotalCost();
  });

  let sum = function (acc, x) { return acc + x};

  $(document).on('click', '.btn-primary', function(event) {
     let totalPrice = totalPriceCost.reduce(sum);
     $('#totalPrice').html(totalPrice);
  });
  
});