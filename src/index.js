import * as Cookie from 'es-cookie';

// given
Cookie.set('default', 'default');
Cookie.set('secureTrue', 'true', { secure: true });
Cookie.set('secureFalse', 'false', { secure: false });

// when
const defaultCookie = Cookie.get('default');
const secureTrue = Cookie.get('secureTrue');
const secureFalse = Cookie.get('secureFalse');

// then
document.getElementById('app').innerHTML = `
<h1>Did we get it back?</h1>
<p><b>Default Cookie:</b> ${defaultCookie ? 'yes' : 'no'}</p>
<p><b>Secure Cookie:</b> ${secureTrue ? 'yes' : 'no'}</p>
<p><b>Insecure Cookie:</b> ${secureFalse ? 'yes' : 'no'}</p>
`;
