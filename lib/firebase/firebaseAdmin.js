import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "buudata-f65f7",
      clientEmail:
        "firebase-adminsdk-swo84@buudata-f65f7.iam.gserviceaccount.com",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC1xIINK6pRFDmm\nci8hWJPlfA9Q7h0mrwkQDm3SOyWqk36BIbVvtr8gmPc/X/7LThWopoGCmUgtv3BX\nz/UgLGYsvngZxCrH2tJzwfuZ4VV2jC2i5vQkDZIT46+3zFHSgvPdnD+2XuHlx4PT\ny+zBYsmlMo7mv0jfdV9OjW8zFfyaflVlcQqElm6+hGvJR/BQxCEHKztXvFuKyzNy\njQtpcno5BLnZGPkpGvT/8+LaXfq6aHfovIEqWGB1D17E5l4wl3VFVPJ3hk/BvaAp\n1x+4Njt04fXh0ODdCvleTSss2ZZWwzmWvPxymuMxnq5YxtT7WNAnF5yn4RDAF1Fr\nlm0JJTCxAgMBAAECggEAEdsaA300n/5io204IAh5juOfBY4+otwzAbbJJwvUaWtP\n1BOhpTXIlMUyFLGzb/ldu1GQC2pPYt8ZhCbTp7N03hRf6/gPU861OdXmh3lRUfH3\nUbdqaFhE71tAmceiihF/L1f4EkxD2LS+yIGR4nV35ZiP3S8RU5JOKINQVy5jwDFa\nd9bVLYPMAZE1kmjBX5XthwIhZU7uZEEU7QevKkZUhCKtT0M5EVt6OKgw1rKomaE/\nD/2+FLUfER3lVKc1P59Za2NSHrUkYDVeg2P3WtAYCnI3dofZ8LRugsDrSaL1rQXg\nuPqvEAQUM0MQPJqH12TwG8sO34XOGep8lkINoJUNWQKBgQDiYtpNcKvibnoza6kl\nehXd1j0cBrNoCnhKOxXxW4wQWVllWI+JkDX8lArnqjsD8moyJcrzhnMOJ2oaP1dH\n657pHPlEM47swh6MaBIJ5/slSqYPB9wmxO2CkLSLZ4iq8WoTrBqtHFa/EuP3gsYR\neWZs6bLRN4zxvhRbb0+ifqKolwKBgQDNi3vls+Mryos/ni8Qfcvhz9cfaxtp3vuf\nQFkcrissdbDW7hrhD3LdYHESxb+VB7N9JKa2+g5d56cUOfxxDqEvPWdPtK/Ew5aJ\n/AtwC+YJk/7oVSv64yKBaacEWfGX0BegmAc6ocWu7BlzpfALkBJgqnWgye3xXre1\nJAPVVOGR9wKBgH7lCBaGRGJ8qJSwETTHlQAuuTw/aUq1K634JpmORhlX6+sJ1BM4\nuXolhWNLoR7aP7pyQqt0PoO9hhTGUmcm5IEoU3RuLfv552OuZgYVeUny6NfeAQHe\nOn+IGxtU4l9nSJ1UR/Omwd0CerPfIqTi1o3QBQKOz7slX4XNA+dCcmxrAoGAEpku\nashuI8Y991Gu3IUlb5dI1dTxNBEzH2PJLGkuCuXTTH9a+0ZUlGdnk9VE0o1R1l78\nns3dgu21FoVwrCIwv3+E25dz2BACjRW7SzYoaHF1vTwHsLngo2kV7bTdwWjY2nUn\nIk0FACDo5Kf9Im602v5Rimz7FL4HTWKm3iTCDF0CgYAVYkbmofRTsrKyYMSJcwAS\n4of2Lqg9PxDXLG5Y/Umsc7Ceop8QINeKH48cejHLioUUrmoBlLZ01jwhNvYkYwYE\nVm8m+27mkYVD9NF/ryCY02EFjr62+ycnZpDFWPtiU/EUBlzO9qKdX7q0xM8Hd++Y\nKxLm/R06rG3GhSG60F29ew==\n-----END PRIVATE KEY-----\n".replace(
          /\\n/g,
          "\n"
        ),
    }),
    databaseURL:
      "https://buudata-f65f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  });
}

export default admin;
