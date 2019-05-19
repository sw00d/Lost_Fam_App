import { connect } from 'react-redux';
import stripeView from './stripeView';


var stripe_url = 'https://api.stripe.com/v1/'
var secret_key = 'sk_test_Z9ATwhTsMcJwlfdGyeQRnevf'

const createCardToken = (cardNumber, expMonth, expYear, cvc) => {
  var cardDetails = {
    "card[number]": cardNumber,
    "card[exp_month]": expMonth,
    "card[exp_year]": expYear,
    "card[cvc]": cvc
  };

  var formBody = [];
  for (var property in cardDetails) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(cardDetails[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  console.log(formBody);
  return fetch(stripe_url + 'tokens', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + secret_key
    },
    body: formBody
  });

};



const mapStateToProps = state => {
  const { albums: {activeAlbum}, user: {token}, app: { isConnected } } = state;
  return { activeAlbum, token, isConnected };
}

const mapDispatchToProps = dispatch => {
  return {
    createCardToken
  }
}


const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(stripeView);

export default Main;
