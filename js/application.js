let updateTotalCost = function(ele) {
  let cost = parseFloat($(ele).children('.cost').children('span').text());
  let quantity = parseFloat($(ele).find('.quantity input').val());
  let totalCost = cost * quantity;

  $(ele).children('.totalCost').html('$' + totalCost);
  return totalCost;
}

//Update Total Price of Shopping Cart
let sum = function (acc, x) { return acc + x};

let updateTotalPrice = function() {
    let totalPriceCost = [];

    $('tbody tr').each(function(i, ele) {
      let totalPrice = updateTotalCost(ele);
      totalPriceCost.push(totalPrice);
      let totalCost = totalPriceCost.reduce(sum);
      $('#totalPrice').html(totalCost);
    });
};

$(document).ready(function() {
  //Total Cost per item
  $('tbody tr').each(function(i, ele) {
    let totalCost = updateTotalCost(ele);
  });

  //Remove item from Shopping Card
  $(document).on('click', '.btn.remove', function(event) {
    $(this).closest('tr').remove();
    updateTotalPrice();
  });

  //Update based on quantity
  $(document).on('input', 'tr input', function () {
    updateTotalPrice();
  });

  //Add to Shopping Cart
  $('#addCart').on('submit', function(event) {
    event.preventDefault();
    let name = $(this).children('[name=name]').val();
    let cost = $(this).children('[name=cost]').val();
    let quantity = $(this).children('[name=quantity]').val();
  
    $('tbody').append('<tr>' +
    '<td class="name">' + name + '</td>' +
    '<td class="cost">$<span>' + cost + '.00</span></td>' +
    '<td class="quantity">QTY <input type="number" value="'+ quantity + '"/></td>' +
    '<td><button class="btn btn-light btn-md remove">remove</button></td>' +
    '<td class="totalCost"></td>' +
    '</tr>');
  
    updateTotalPrice();
    $(this).children('[name=name]').val('');
    $(this).children('[name=cost]').val('');
    $(this).children('[name=quantity]').val('');
  })
});

