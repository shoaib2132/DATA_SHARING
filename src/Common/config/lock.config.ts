export const rsa = {
    "key": {
        privateKey: "-----BEGIN RSA PRIVATE KEY-----" +
            "X7kqOBWx7nQRQ1Tf0Euvsh4uWS/m2XDN4U57qew5y/+UidXvCXDIo7XqjZEnN9MI53BMT+NH" +
            "MIIEowIBAAKCAQEAqSycCJPnuL+5EbHtYFl52itLiOmWSyOW5cE82zRv04IUO05iTJvgSIPu" +
            "HS+lYl0ShwrRyufXgYKEbRNnk3+oR/jL61vaQ6YC1/J1koL317wQtvgOsUgsUMhvNSTa45Uf" +
            "EFgyQtUmuRs4tOp9SwL130SGyTdc/v0vt+8G4HSSpDYJvq/JsBMM5Vz5LAX2hhgrF4dFFxkb" +
            "ZS62aZFKVpBk6cXPT+ceV3rc2bv4e3ww3aXHRHnK232GtTprZ1CQORlooawW3UC7LZT1QQID" +
            "AQABAoIBACLAtkEQ2T5brFIVQhVT7DNER50VlzlSU1JZcv349Kv3gd55CLqCHv3mlFZ3vFOP" +
            "KWE52L4DNoMcuTgW+SB7NaofgTuymrbafzkIBOSX3SYMVDtFSKzST8MpCCA7MoIKx3YYbpoZ" +
            "UpAJSfWr0NqbDEc4AEQNqm02j/WGhfz1oonnwDZSmBuAa1Ws7QxYoXOI4BcZYfYt+UHaWzo9" +
            "IuWrdrANazSBuWLeGLgUlBlMenEZJSDfkVkUuPv01bHureajpEdyY+8uaeC2xHdzcUiRRZVr" +
            "bqnoBAXJRu8C/wJwZG48tUJFCeV3GDeI9o2xv/k5c1WvpNUBuP79A4/9MTkchFECgYEA4XqZ" +
            "LNZ0yfKoNb9XJXsW+KDGTF+gCxdIAEiR4mEXEsbH1nH88EfgfmVeTDnm7V2U3NnV7S+7yVO2" +
            "QYpEHYKHW41UhlpBQFxreAMNlw9udR22yyQiE5HWWQ8mwssYnB2gHekJYkJpqRusHPMv2jUK" +
            "FVrHwYn+jXxDiZHr8heegI0CgYEAwBLqfQW3yrEQTebS5EMeaGAztu5Kd2fykXXCP0BfpFUo" +
            "MwJh9jdHhJy3YurXBR0JU6ZGrag8OSQloml09Xvd8iPmaCyOM78SCvy79oBVjv9ufViZrGkU" +
            "0Bf8AewKgDH2LO1CQibEhN3rK4cN9esfHenyRi5wNvTX/SQR2S+P3IUCgYAHNTMWUtiy5/Xm" +
            "mfJAOXoXgpQ0Ns5X7GuZzrgTI4VoTUBwI36xc6rCf50PFL7EEbzDfpcvGNqI6gsmdzQMOXL4" +
            "Q0FTdikl1I5+7KIPlSezyLpiLgqE06GlgS19Bp8Hxo6qxhtNr8/O3xqWZlO+RvnGivtdvXqM" +
            "rU8/Y5HGUGj5tQKBgBkaH8UpGyUFUQEtWoB0eSPg9sFAkUDbt+rkvfcwPY+nhXJtLEpWXSVq" +
            "qdjmoiVL7y0cfP4zD3PUUorQR3XRs2by5CjXMdp3bS88aoBDs2rV3SXKj4Ll1M+BYvEJXTH1" +
            "1Zt3goJMuMA4lISCyQNLsCxjp8MeTJISG6w8q4x718xVAoGBAIqUk3M4HxfW2Yyqrm0QsJzD" +
            "GIvsKYpbZColP2C0TCL1jZjQvNV1UuMlAjo14Q3tATOWGWuzuxGjTY0OLDvl3Sjeqw2H695K" +
            "thZqJxXBsBTF7eUhyXxxWxx/W4tXAtKIL+r0B+lVPMAGa5/6nntNeX5B2h/QuBcb4HcF7jOY" +
            "p2Az-----END RSA PRIVATE KEY-----",

        publicKey: "-----BEGIN PUBLIC KEY-----"+
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq0wMRkf3Ci8uALvEwR8X"+
        "HvLoy5X7QPlAMJK//elI8pMBfH3XsBM95lDIOkxB7yaJspQGCD75wxufZdU9SzH9"+
        "5yki8fKOsjb1dQuyZF2jcr77/RYUnGtcR9Rszhyl/cVPN4cKb502Dw3SLWxTyuoS"+
        "ITb+tvQFWm9nH8oGRHroLDkoo1OdTPkQpAjkGhCmRMvlzDaXBUHGh5q5xHhTeH59"+
        "m+/UhdcbudXVQsWK421R9XiYaR+4OFVi2R93WCzPeKfmCETh1gzsD38+S8TBdkh0"+
        "kEszft9bD3kQuLUUn9B1dbcj5nOOsx8xAR3gcUE8BL5a9ZetyteoZhfhXwqmT9eH"+
        "LQIDAQAB-----END PUBLIC KEY-----",
        EncryptKey : "1203199320052021",
        EncryptIV : "1203199320052021"
    },
}





//     This regex will enforce these rules:

// At least one upper case English letter, (?=.*? [A - Z])
// At least one lower case English letter, (?=.*? [a - z])
// At least one digit, (?=.*? [0 - 9])
// At least one special character, (?=.*? [#?!@$%^&* -])
// Minimum eight in length.{ 8,} (with the anchors)