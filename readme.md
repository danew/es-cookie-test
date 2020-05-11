# ES-Cookie Test
[`es-cookie`](https://github.com/theodorejb/es-cookie) doesn't set the cookie when the `secure` flag is true.

## Results
Here are the browsers I have tested:
| Broswer | Version                                              | Pass/Fail |
|---------|------------------------------------------------------|-----------|
| Firefox | 76.0.1 (64-bit)                                      | Fail      |
| Firefox | 77.0b3 (64-bit)                                      | Pass      |
| Chrome  | Version 81.0.4044.138 (Official Build) (64-bit)      | Fail      |
| Chrome  | Version 84.0.4143.0 (Official Build) canary (64-bit) | Fail      |

## Run the test 
1. clone and install the package
2. run `npm start`
3. open [http://localhost:1234](http://localhost:1234)