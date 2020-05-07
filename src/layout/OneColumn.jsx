import React, { useEffect } from 'react';
import Header from '../components/Header';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import ClientOAuth2 from 'client-oauth2';

export default function OneColumn() {
  let obAuth = new ClientOAuth2({
    clientId: 'obstore-client-id',
    clientSecret: 'obstore-secret#do-not-tell-anyone',
    accessTokenUri: 'https://obstore.herokuapp.com/oauth/token',
    authorizationUri: 'https://obstore.herokuapp.com/oauth/authorize',
    redirectUri: 'http://localhost:3000',
    scopes: ['write'],
  });

  async function getToken() {
    let resp = await obAuth.owner.getToken('customer', 'customer123');
    console.log(resp.data);
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </React.Fragment>
  );
}
