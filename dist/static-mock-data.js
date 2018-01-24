/*!
 * Static Mock Data v3.2.9 (January 24th 2018)
 * 
 * https://github.com/BigstickCarpet/static-mock-data
 * 
 * @author  James Messinger (http://bigstickcarpet.com)
 * @license (MIT OR CC-BY-NC-SA-4.0)
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.mock || (g.mock = {})).data = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "username": "admin",
    "password": "admin",
    "name": {
      "first": "Adam",
      "last": "Ministrator"
    },
    "ssn": "123-45-6789",
    "dob": "1900-01-01T06:00:00.000Z",
    "hiredOn": "1900-01-01T06:00:00.000Z",
    "terminatedOn": null,
    "email": "admin@company.com",
    "phones": [
      {
        "type": "office",
        "number": "123-456-7890"
      }
    ],
    "address": {
      "street": "7251 Walnut Hill Ln",
      "city": "Scurry",
      "state": "Oregon",
      "zip": "36713"
    },
    "roles": [
      "admin",
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/admin.jpg",
    "thumbnail": "portraits/admin-thumb.jpg"
  },
  {
    "username": "jdoe",
    "password": "jdoe",
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "ssn": "704-23-6085",
    "dob": "1978-10-02T05:00:00.000Z",
    "hiredOn": "2002-04-11T05:00:00.000Z",
    "terminatedOn": null,
    "email": "john.doe@company.com",
    "phones": [
      {
        "type": "office",
        "number": "456-789-1230"
      },
      {
        "type": "cell",
        "number": "654-321-0987"
      }
    ],
    "address": {
      "street": "3199 Country Club Rd",
      "city": "Fremont",
      "state": "Virginia",
      "zip": "94390"
    },
    "roles": [
      "hourly",
      "part time",
      "consultant"
    ],
    "department": "Marketing",
    "gender": "male",
    "portrait": "portraits/jdoe.jpg",
    "thumbnail": "portraits/jdoe-thumb.jpg"
  },
  {
    "username": "purplewolf498",
    "password": "personal",
    "name": {
      "first": "Yolanda",
      "last": "Bishop"
    },
    "ssn": "929-54-2428",
    "dob": "1965-12-08T06:00:00.000Z",
    "hiredOn": "1989-08-14T05:00:00.000Z",
    "terminatedOn": null,
    "email": "yolanda.bishop25@company.com",
    "phones": [
      {
        "type": "office",
        "number": "612-204-4421"
      },
      {
        "type": "cell",
        "number": "380-959-3396"
      }
    ],
    "address": {
      "street": "4969 Lovers Ln",
      "city": "Elko",
      "state": "Utah",
      "zip": "98260"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/purplewolf498.jpg",
    "thumbnail": "portraits/purplewolf498-thumb.jpg"
  },
  {
    "username": "whitecat698",
    "password": "jenny1",
    "name": {
      "first": "Allen",
      "last": "Hansen"
    },
    "ssn": "504-23-5361",
    "dob": "1965-12-15T06:00:00.000Z",
    "hiredOn": "1988-03-26T06:00:00.000Z",
    "terminatedOn": null,
    "email": "allen.hansen47@company.com",
    "phones": [
      {
        "type": "office",
        "number": "377-837-4817"
      },
      {
        "type": "cell",
        "number": "787-513-9084"
      }
    ],
    "address": {
      "street": "1902 Plum St",
      "city": "Akron",
      "state": "Hawaii",
      "zip": "26975"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/whitecat698.jpg",
    "thumbnail": "portraits/whitecat698-thumb.jpg"
  },
  {
    "username": "bluepanda840",
    "password": "funfun",
    "name": {
      "first": "Leslie",
      "last": "Vasquez"
    },
    "ssn": "906-45-7380",
    "dob": "1986-10-12T05:00:00.000Z",
    "hiredOn": "2011-10-24T05:00:00.000Z",
    "terminatedOn": null,
    "email": "leslie.vasquez65@company.com",
    "phones": [
      {
        "type": "office",
        "number": "854-988-2654"
      },
      {
        "type": "home",
        "number": "106-146-7963"
      }
    ],
    "address": {
      "street": "7255 Camden Ave",
      "city": "Frederick",
      "state": "Michigan",
      "zip": "10865"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/bluepanda840.jpg",
    "thumbnail": "portraits/bluepanda840-thumb.jpg"
  },
  {
    "username": "lazypanda966",
    "password": "start1",
    "name": {
      "first": "Georgia",
      "last": "Bryant"
    },
    "ssn": "326-59-7200",
    "dob": "1966-12-08T06:00:00.000Z",
    "hiredOn": "2006-12-24T06:00:00.000Z",
    "terminatedOn": null,
    "email": "georgia.bryant83@company.com",
    "phones": [
      {
        "type": "office",
        "number": "716-661-6412"
      },
      {
        "type": "cell",
        "number": "493-794-9872"
      }
    ],
    "address": {
      "street": "8291 Hunters Creek Dr",
      "city": "Billings",
      "state": "Oklahoma",
      "zip": "95089"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/lazypanda966.jpg",
    "thumbnail": "portraits/lazypanda966-thumb.jpg"
  },
  {
    "username": "bigelephant907",
    "password": "model",
    "name": {
      "first": "Troy",
      "last": "Hart"
    },
    "ssn": "452-13-6989",
    "dob": "1988-06-24T05:00:00.000Z",
    "hiredOn": "2012-01-05T06:00:00.000Z",
    "terminatedOn": null,
    "email": "troy.hart74@company.com",
    "phones": [
      {
        "type": "office",
        "number": "222-799-4554"
      },
      {
        "type": "cell",
        "number": "603-396-4054"
      }
    ],
    "address": {
      "street": "7665 Washington Ave",
      "city": "Indianapolis",
      "state": "Connecticut",
      "zip": "23222"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/bigelephant907.jpg",
    "thumbnail": "portraits/bigelephant907-thumb.jpg"
  },
  {
    "username": "ticklishgorilla951",
    "password": "sparky",
    "name": {
      "first": "Andrew",
      "last": "Jackson"
    },
    "ssn": "693-12-9075",
    "dob": "1977-01-15T06:00:00.000Z",
    "hiredOn": "2011-09-05T05:00:00.000Z",
    "terminatedOn": "2013-04-25T05:00:00.000Z",
    "email": "andrew.jackson62@company.com",
    "phones": [
      {
        "type": "office",
        "number": "166-121-9675"
      },
      {
        "type": "cell",
        "number": "599-669-7982"
      }
    ],
    "address": {
      "street": "4815 Bollinger Rd",
      "city": "Caldwell",
      "state": "Kentucky",
      "zip": "89310"
    },
    "roles": [
      "hourly",
      "full time",
      "contractor"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/ticklishgorilla951.jpg",
    "thumbnail": "portraits/ticklishgorilla951-thumb.jpg"
  },
  {
    "username": "whitekoala138",
    "password": "gina",
    "name": {
      "first": "John",
      "last": "Jackson"
    },
    "ssn": "163-60-5769",
    "dob": "1989-07-09T05:00:00.000Z",
    "hiredOn": "2013-05-25T05:00:00.000Z",
    "terminatedOn": null,
    "email": "harvey.lawrence68@company.com",
    "phones": [
      {
        "type": "office",
        "number": "378-892-2670"
      },
      {
        "type": "cell",
        "number": "536-675-2892"
      }
    ],
    "address": {
      "street": "3081 Paddock Way",
      "city": "Shiloh",
      "state": "Texas",
      "zip": "32142"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/whitekoala138.jpg",
    "thumbnail": "portraits/whitekoala138-thumb.jpg"
  },
  {
    "username": "yellowladybug535",
    "password": "qwer",
    "name": {
      "first": "Roberta",
      "last": "Morgan"
    },
    "ssn": "423-85-9453",
    "dob": "1969-05-17T05:00:00.000Z",
    "hiredOn": "2012-04-14T05:00:00.000Z",
    "terminatedOn": null,
    "email": "roberta.morgan39@company.com",
    "phones": [
      {
        "type": "office",
        "number": "726-494-2648"
      },
      {
        "type": "cell",
        "number": "106-629-8149"
      }
    ],
    "address": {
      "street": "2819 Woodland St",
      "city": "Sunnyvale",
      "state": "Wisconsin",
      "zip": "14618"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/yellowladybug535.jpg",
    "thumbnail": "portraits/yellowladybug535-thumb.jpg"
  },
  {
    "username": "yellowbird271",
    "password": "inter",
    "name": {
      "first": "Judith",
      "last": "Hill"
    },
    "ssn": "218-16-5327",
    "dob": "1991-07-05T05:00:00.000Z",
    "hiredOn": "2014-06-13T05:00:00.000Z",
    "terminatedOn": null,
    "email": "judith.reid60@company.com",
    "phones": [
      {
        "type": "office",
        "number": "280-961-5125"
      },
      {
        "type": "home",
        "number": "489-828-7266"
      }
    ],
    "address": {
      "street": "2022 Spring St",
      "city": "Edgewood",
      "state": "Connecticut",
      "zip": "61320"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/yellowbird271.jpg",
    "thumbnail": "portraits/yellowbird271-thumb.jpg"
  },
  {
    "username": "bluegorilla84",
    "password": "skate",
    "name": {
      "first": "Herbert",
      "last": "Smith"
    },
    "ssn": "857-77-3546",
    "dob": "1987-01-23T06:00:00.000Z",
    "hiredOn": "2010-07-22T05:00:00.000Z",
    "terminatedOn": null,
    "email": "herbert.jimenez24@company.com",
    "phones": [
      {
        "type": "office",
        "number": "547-599-7247"
      },
      {
        "type": "home",
        "number": "547-567-4102"
      }
    ],
    "address": {
      "street": "1358 Elgin St",
      "city": "Rio Rancho",
      "state": "South Dakota",
      "zip": "22109"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/bluegorilla84.jpg",
    "thumbnail": "portraits/bluegorilla84-thumb.jpg"
  },
  {
    "username": "greenwolf347",
    "password": "avalon",
    "name": {
      "first": "Rita",
      "last": "Elliott"
    },
    "ssn": "285-24-7202",
    "dob": "1986-03-22T06:00:00.000Z",
    "hiredOn": "2010-09-02T05:00:00.000Z",
    "terminatedOn": null,
    "email": "rita.elliott58@company.com",
    "phones": [
      {
        "type": "office",
        "number": "509-358-3176"
      },
      {
        "type": "home",
        "number": "808-767-7702"
      }
    ],
    "address": {
      "street": "8319 College St",
      "city": "Toledo",
      "state": "Nebraska",
      "zip": "96351"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Human Resources",
    "gender": "female",
    "portrait": "portraits/greenwolf347.jpg",
    "thumbnail": "portraits/greenwolf347-thumb.jpg"
  },
  {
    "username": "orangeelephant668",
    "password": "volleyba",
    "name": {
      "first": "Natalie",
      "last": "Russell"
    },
    "ssn": "713-16-2496",
    "dob": "1980-11-17T06:00:00.000Z",
    "hiredOn": "2010-04-19T05:00:00.000Z",
    "terminatedOn": null,
    "email": "natalie.russell65@company.com",
    "phones": [
      {
        "type": "office",
        "number": "637-554-9381"
      },
      {
        "type": "cell",
        "number": "268-761-7711"
      }
    ],
    "address": {
      "street": "9337 Hogan St",
      "city": "Roseburg",
      "state": "Arkansas",
      "zip": "77421"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/orangeelephant668.jpg",
    "thumbnail": "portraits/orangeelephant668-thumb.jpg"
  },
  {
    "username": "crazypanda274",
    "password": "hansolo",
    "name": {
      "first": "Gina",
      "last": "Mccoy"
    },
    "ssn": "843-86-3210",
    "dob": "1970-08-13T05:00:00.000Z",
    "hiredOn": "2014-12-21T06:00:00.000Z",
    "terminatedOn": null,
    "email": "gina.mccoy13@company.com",
    "phones": [
      {
        "type": "office",
        "number": "968-695-9354"
      },
      {
        "type": "home",
        "number": "162-343-7181"
      }
    ],
    "address": {
      "street": "7345 Locust Rd",
      "city": "Ironville",
      "state": "Florida",
      "zip": "78134"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/crazypanda274.jpg",
    "thumbnail": "portraits/crazypanda274-thumb.jpg"
  },
  {
    "username": "whitecat119",
    "password": "mason",
    "name": {
      "first": "Eduardo",
      "last": "Porter"
    },
    "ssn": "930-33-6421",
    "dob": "1967-06-02T05:00:00.000Z",
    "hiredOn": "2007-06-25T05:00:00.000Z",
    "terminatedOn": "2012-02-17T06:00:00.000Z",
    "email": "eduardo.porter98@company.com",
    "phones": [
      {
        "type": "office",
        "number": "982-852-9258"
      },
      {
        "type": "cell",
        "number": "836-804-2719"
      }
    ],
    "address": {
      "street": "7028 Frances Ct",
      "city": "Henderson",
      "state": "Michigan",
      "zip": "68957"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/whitecat119.jpg",
    "thumbnail": "portraits/whitecat119-thumb.jpg"
  },
  {
    "username": "whitemouse304",
    "password": "stimpy",
    "name": {
      "first": "Priscilla",
      "last": "Hill"
    },
    "ssn": "603-83-1809",
    "dob": "1986-04-08T06:00:00.000Z",
    "hiredOn": "2010-11-19T06:00:00.000Z",
    "terminatedOn": null,
    "email": "priscilla.mitchell22@company.com",
    "phones": [
      {
        "type": "office",
        "number": "464-509-7488"
      },
      {
        "type": "cell",
        "number": "118-790-1692"
      }
    ],
    "address": {
      "street": "7713 First Street",
      "city": "New Haven",
      "state": "Connecticut",
      "zip": "42732"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/whitemouse304.jpg",
    "thumbnail": "portraits/whitemouse304-thumb.jpg"
  },
  {
    "username": "beautifulleopard367",
    "password": "claude",
    "name": {
      "first": "Pedro",
      "last": "Peterson"
    },
    "ssn": "405-48-3908",
    "dob": "1982-06-12T05:00:00.000Z",
    "hiredOn": "2005-10-21T05:00:00.000Z",
    "terminatedOn": null,
    "email": "pedro.peterson70@company.com",
    "phones": [
      {
        "type": "office",
        "number": "256-436-7216"
      },
      {
        "type": "cell",
        "number": "521-123-1270"
      }
    ],
    "address": {
      "street": "4137 Lone Wolf Trail",
      "city": "Boulder",
      "state": "Texas",
      "zip": "58987"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/beautifulleopard367.jpg",
    "thumbnail": "portraits/beautifulleopard367-thumb.jpg"
  },
  {
    "username": "whitepeacock532",
    "password": "zouzou",
    "name": {
      "first": "Darlene",
      "last": "Duncan"
    },
    "ssn": "431-86-4864",
    "dob": "1980-03-02T06:00:00.000Z",
    "hiredOn": "2002-06-17T05:00:00.000Z",
    "terminatedOn": null,
    "email": "darlene.duncan94@company.com",
    "phones": [
      {
        "type": "office",
        "number": "238-413-5068"
      },
      {
        "type": "cell",
        "number": "337-590-1205"
      }
    ],
    "address": {
      "street": "9913 Stevens Creek Blvd",
      "city": "Evansville",
      "state": "Minnesota",
      "zip": "37697"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "female",
    "portrait": "portraits/whitepeacock532.jpg",
    "thumbnail": "portraits/whitepeacock532-thumb.jpg"
  },
  {
    "username": "blackpanda237",
    "password": "novell",
    "name": {
      "first": "Laurie",
      "last": "Castro"
    },
    "ssn": "145-95-4662",
    "dob": "1977-06-04T05:00:00.000Z",
    "hiredOn": "2011-03-08T06:00:00.000Z",
    "terminatedOn": null,
    "email": "laurie.castro82@company.com",
    "phones": [
      {
        "type": "office",
        "number": "761-689-8002"
      },
      {
        "type": "cell",
        "number": "169-813-9866"
      }
    ],
    "address": {
      "street": "9199 E North St",
      "city": "Coppell",
      "state": "Michigan",
      "zip": "21627"
    },
    "roles": [
      "hourly",
      "part time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/blackpanda237.jpg",
    "thumbnail": "portraits/blackpanda237-thumb.jpg"
  },
  {
    "username": "greenfish196",
    "password": "melanie",
    "name": {
      "first": "Deann",
      "last": "Williamson"
    },
    "ssn": "614-57-5859",
    "dob": "1992-01-15T06:00:00.000Z",
    "hiredOn": "2012-06-24T05:00:00.000Z",
    "terminatedOn": null,
    "email": "deann.williamson57@company.com",
    "phones": [
      {
        "type": "office",
        "number": "282-114-8353"
      },
      {
        "type": "cell",
        "number": "723-910-9298"
      }
    ],
    "address": {
      "street": "1772 Spring St",
      "city": "Tacoma",
      "state": "South Dakota",
      "zip": "11875"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/greenfish196.jpg",
    "thumbnail": "portraits/greenfish196-thumb.jpg"
  },
  {
    "username": "ticklishdog505",
    "password": "revolver",
    "name": {
      "first": "Irene",
      "last": "Gutierrez"
    },
    "ssn": "815-56-8221",
    "dob": "1992-12-17T06:00:00.000Z",
    "hiredOn": "2013-01-17T06:00:00.000Z",
    "terminatedOn": null,
    "email": "irene.gutierrez33@company.com",
    "phones": [
      {
        "type": "office",
        "number": "601-692-3621"
      },
      {
        "type": "home",
        "number": "577-170-8972"
      }
    ],
    "address": {
      "street": "9977 Saddle Dr",
      "city": "Mesquite",
      "state": "Idaho",
      "zip": "52655"
    },
    "roles": [
      "salaried",
      "part time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/ticklishdog505.jpg",
    "thumbnail": "portraits/ticklishdog505-thumb.jpg"
  },
  {
    "username": "redrabbit642",
    "password": "sheng",
    "name": {
      "first": "Samuel",
      "last": "Smith"
    },
    "ssn": "773-79-4617",
    "dob": "1974-05-19T05:00:00.000Z",
    "hiredOn": "2012-09-25T05:00:00.000Z",
    "terminatedOn": null,
    "email": "samuel.nelson94@company.com",
    "phones": [
      {
        "type": "office",
        "number": "392-475-4229"
      },
      {
        "type": "cell",
        "number": "509-988-2972"
      }
    ],
    "address": {
      "street": "1428 Cherry St",
      "city": "Los Lunas",
      "state": "Utah",
      "zip": "49737"
    },
    "roles": [
      "hourly",
      "part time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/redrabbit642.jpg",
    "thumbnail": "portraits/redrabbit642-thumb.jpg"
  },
  {
    "username": "beautifulcat2",
    "password": "1992",
    "name": {
      "first": "Kay",
      "last": "Walker"
    },
    "ssn": "739-82-8844",
    "dob": "1984-05-12T05:00:00.000Z",
    "hiredOn": "2004-12-20T06:00:00.000Z",
    "terminatedOn": null,
    "email": "kay.walker20@company.com",
    "phones": [
      {
        "type": "office",
        "number": "149-237-2905"
      },
      {
        "type": "cell",
        "number": "362-385-1106"
      }
    ],
    "address": {
      "street": "1323 W Campbell Ave",
      "city": "Evansville",
      "state": "Rhode Island",
      "zip": "53794"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/beautifulcat2.jpg",
    "thumbnail": "portraits/beautifulcat2-thumb.jpg"
  },
  {
    "username": "lazypeacock969",
    "password": "hothot",
    "name": {
      "first": "Loretta",
      "last": "Coleman"
    },
    "ssn": "449-78-7552",
    "dob": "1968-11-08T06:00:00.000Z",
    "hiredOn": "1995-10-07T05:00:00.000Z",
    "terminatedOn": null,
    "email": "loretta.coleman49@company.com",
    "phones": [
      {
        "type": "office",
        "number": "678-326-2799"
      },
      {
        "type": "cell",
        "number": "728-479-1804"
      }
    ],
    "address": {
      "street": "5402 Central St",
      "city": "Boulder",
      "state": "Oklahoma",
      "zip": "43718"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/lazypeacock969.jpg",
    "thumbnail": "portraits/lazypeacock969-thumb.jpg"
  },
  {
    "username": "biggoose954",
    "password": "1993",
    "name": {
      "first": "Stella",
      "last": "Ruiz"
    },
    "ssn": "337-27-4497",
    "dob": "1969-11-13T06:00:00.000Z",
    "hiredOn": "2008-02-07T06:00:00.000Z",
    "terminatedOn": null,
    "email": "stella.ruiz83@company.com",
    "phones": [
      {
        "type": "office",
        "number": "207-500-3443"
      },
      {
        "type": "home",
        "number": "550-748-8322"
      }
    ],
    "address": {
      "street": "4982 W Sherman Dr",
      "city": "Lexington",
      "state": "Virginia",
      "zip": "46533"
    },
    "roles": [
      "hourly",
      "part time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/biggoose954.jpg",
    "thumbnail": "portraits/biggoose954-thumb.jpg"
  },
  {
    "username": "bluerabbit187",
    "password": "kirk",
    "name": {
      "first": "Soham",
      "last": "Flores"
    },
    "ssn": "444-94-5888",
    "dob": "1981-07-13T05:00:00.000Z",
    "hiredOn": "2012-01-05T06:00:00.000Z",
    "terminatedOn": null,
    "email": "soham.flores34@company.com",
    "phones": [
      {
        "type": "office",
        "number": "628-232-8534"
      },
      {
        "type": "cell",
        "number": "841-693-4485"
      }
    ],
    "address": {
      "street": "5254 E North St",
      "city": "Joliet",
      "state": "Indiana",
      "zip": "76671"
    },
    "roles": [
      "hourly",
      "part time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/bluerabbit187.jpg",
    "thumbnail": "portraits/bluerabbit187-thumb.jpg"
  },
  {
    "username": "crazyostrich528",
    "password": "preston",
    "name": {
      "first": "Leslie",
      "last": "Bates"
    },
    "ssn": "542-45-3230",
    "dob": "1965-03-08T06:00:00.000Z",
    "hiredOn": "1990-05-07T05:00:00.000Z",
    "terminatedOn": null,
    "email": "leslie.bates95@company.com",
    "phones": [
      {
        "type": "office",
        "number": "890-543-2326"
      },
      {
        "type": "home",
        "number": "224-510-1813"
      }
    ],
    "address": {
      "street": "1741 W Pecan St",
      "city": "Forney",
      "state": "Ohio",
      "zip": "70913"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/crazyostrich528.jpg",
    "thumbnail": "portraits/crazyostrich528-thumb.jpg"
  },
  {
    "username": "yellowbird585",
    "password": "lollipop",
    "name": {
      "first": "Jayden",
      "last": "Jackson"
    },
    "ssn": "185-45-3075",
    "dob": "1984-12-11T06:00:00.000Z",
    "hiredOn": "2009-03-25T05:00:00.000Z",
    "terminatedOn": "2013-07-28T05:00:00.000Z",
    "email": "jayden.perry28@company.com",
    "phones": [
      {
        "type": "office",
        "number": "763-692-2070"
      },
      {
        "type": "home",
        "number": "873-269-7538"
      }
    ],
    "address": {
      "street": "1931 Mcgowen St",
      "city": "Helena",
      "state": "Delaware",
      "zip": "92581"
    },
    "roles": [
      "salaried",
      "full time",
      "consultant"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/yellowbird585.jpg",
    "thumbnail": "portraits/yellowbird585-thumb.jpg"
  },
  {
    "username": "bluemeercat66",
    "password": "bigfoot",
    "name": {
      "first": "John",
      "last": "Fields"
    },
    "ssn": "416-33-5904",
    "dob": "1979-01-22T06:00:00.000Z",
    "hiredOn": "2005-10-10T05:00:00.000Z",
    "terminatedOn": "2009-02-15T06:00:00.000Z",
    "email": "herbert.fields50@company.com",
    "phones": [
      {
        "type": "office",
        "number": "359-832-6262"
      },
      {
        "type": "cell",
        "number": "683-605-4954"
      }
    ],
    "address": {
      "street": "9357 Adams St",
      "city": "Eureka",
      "state": "Maine",
      "zip": "27861"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/bluemeercat66.jpg",
    "thumbnail": "portraits/bluemeercat66-thumb.jpg"
  },
  {
    "username": "ticklishgoose874",
    "password": "hakr",
    "name": {
      "first": "Leon",
      "last": "Gutierrez"
    },
    "ssn": "391-52-7701",
    "dob": "1965-05-25T05:00:00.000Z",
    "hiredOn": "2007-08-18T05:00:00.000Z",
    "terminatedOn": null,
    "email": "leon.gutierrez45@company.com",
    "phones": [
      {
        "type": "office",
        "number": "204-199-8167"
      },
      {
        "type": "home",
        "number": "302-211-6655"
      }
    ],
    "address": {
      "street": "3224 Hunters Creek Dr",
      "city": "Lowell",
      "state": "South Dakota",
      "zip": "90553"
    },
    "roles": [
      "salaried",
      "full time",
      "consultant"
    ],
    "department": "Marketing",
    "gender": "male",
    "portrait": "portraits/ticklishgoose874.jpg",
    "thumbnail": "portraits/ticklishgoose874-thumb.jpg"
  },
  {
    "username": "tinyduck628",
    "password": "portland",
    "name": {
      "first": "Ryan",
      "last": "Kuhn"
    },
    "ssn": "425-57-4836",
    "dob": "1984-12-28T06:00:00.000Z",
    "hiredOn": "2008-07-02T05:00:00.000Z",
    "terminatedOn": "2011-05-20T05:00:00.000Z",
    "email": "ryan.kuhn87@company.com",
    "phones": [
      {
        "type": "office",
        "number": "477-658-8081"
      },
      {
        "type": "cell",
        "number": "673-660-5924"
      }
    ],
    "address": {
      "street": "5848 Groveland Terrace",
      "city": "Caldwell",
      "state": "Montana",
      "zip": "66688"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/tinyduck628.jpg",
    "thumbnail": "portraits/tinyduck628-thumb.jpg"
  },
  {
    "username": "lazyrabbit169",
    "password": "nipple",
    "name": {
      "first": "Brent",
      "last": "King"
    },
    "ssn": "510-26-4636",
    "dob": "1986-10-16T05:00:00.000Z",
    "hiredOn": "2014-01-03T06:00:00.000Z",
    "terminatedOn": "2014-08-24T05:00:00.000Z",
    "email": "brent.king35@company.com",
    "phones": [
      {
        "type": "office",
        "number": "368-354-8777"
      },
      {
        "type": "home",
        "number": "262-224-8490"
      }
    ],
    "address": {
      "street": "2530 Pockrus Page Rd",
      "city": "Nashville",
      "state": "Nebraska",
      "zip": "60300"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/lazyrabbit169.jpg",
    "thumbnail": "portraits/lazyrabbit169-thumb.jpg"
  },
  {
    "username": "blackelephant246",
    "password": "northern",
    "name": {
      "first": "Leona",
      "last": "Bell"
    },
    "ssn": "670-80-2559",
    "dob": "1984-06-27T05:00:00.000Z",
    "hiredOn": "2009-02-09T06:00:00.000Z",
    "terminatedOn": null,
    "email": "leona.bell65@company.com",
    "phones": [
      {
        "type": "office",
        "number": "486-891-2611"
      },
      {
        "type": "cell",
        "number": "973-110-4634"
      }
    ],
    "address": {
      "street": "6729 Pecan Acres Ln",
      "city": "Rio Rancho",
      "state": "Washington",
      "zip": "36236"
    },
    "roles": [
      "salaried",
      "full time",
      "consultant"
    ],
    "department": "Human Resources",
    "gender": "female",
    "portrait": "portraits/blackelephant246.jpg",
    "thumbnail": "portraits/blackelephant246-thumb.jpg"
  },
  {
    "username": "smallostrich593",
    "password": "aberdeen",
    "name": {
      "first": "Evelyn",
      "last": "Wallace"
    },
    "ssn": "394-47-7510",
    "dob": "1990-01-22T06:00:00.000Z",
    "hiredOn": "2010-12-28T06:00:00.000Z",
    "terminatedOn": null,
    "email": "evelyn.wallace67@company.com",
    "phones": [
      {
        "type": "office",
        "number": "373-407-2581"
      },
      {
        "type": "home",
        "number": "773-308-8212"
      }
    ],
    "address": {
      "street": "5285 W 6 Th St",
      "city": "San Jose",
      "state": "Maine",
      "zip": "82809"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/smallostrich593.jpg",
    "thumbnail": "portraits/smallostrich593-thumb.jpg"
  },
  {
    "username": "ticklishbutterfly1",
    "password": "elliott",
    "name": {
      "first": "Yolanda",
      "last": "Neal"
    },
    "ssn": "926-35-3701",
    "dob": "1976-12-18T06:00:00.000Z",
    "hiredOn": "2001-12-06T06:00:00.000Z",
    "terminatedOn": null,
    "email": "yolanda.neal48@company.com",
    "phones": [
      {
        "type": "office",
        "number": "126-894-5345"
      },
      {
        "type": "cell",
        "number": "168-244-4914"
      }
    ],
    "address": {
      "street": "9050 Royal Ln",
      "city": "Tacoma",
      "state": "Idaho",
      "zip": "45089"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/ticklishbutterfly1.jpg",
    "thumbnail": "portraits/ticklishbutterfly1-thumb.jpg"
  },
  {
    "username": "yellowcat935",
    "password": "davids",
    "name": {
      "first": "Ritthy",
      "last": "Gray"
    },
    "ssn": "501-59-9711",
    "dob": "1976-08-07T05:00:00.000Z",
    "hiredOn": "2003-09-24T05:00:00.000Z",
    "terminatedOn": null,
    "email": "ritthy.gray28@company.com",
    "phones": [
      {
        "type": "office",
        "number": "515-162-9260"
      },
      {
        "type": "cell",
        "number": "398-347-2370"
      }
    ],
    "address": {
      "street": "1946 Fairview St",
      "city": "Seymour",
      "state": "Oregon",
      "zip": "42724"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/yellowcat935.jpg",
    "thumbnail": "portraits/yellowcat935-thumb.jpg"
  },
  {
    "username": "ticklishbear822",
    "password": "monopoly",
    "name": {
      "first": "Jeremy",
      "last": "Stevens"
    },
    "ssn": "383-74-9736",
    "dob": "1970-06-27T05:00:00.000Z",
    "hiredOn": "2003-10-16T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jeremy.stevens33@company.com",
    "phones": [
      {
        "type": "office",
        "number": "481-891-5537"
      },
      {
        "type": "cell",
        "number": "366-835-5412"
      }
    ],
    "address": {
      "street": "8004 Miller Ave",
      "city": "Duncanville",
      "state": "Iowa",
      "zip": "61012"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/ticklishbear822.jpg",
    "thumbnail": "portraits/ticklishbear822-thumb.jpg"
  },
  {
    "username": "ticklishbird555",
    "password": "showing",
    "name": {
      "first": "Danny",
      "last": "Garza"
    },
    "ssn": "641-45-9168",
    "dob": "1985-02-26T06:00:00.000Z",
    "hiredOn": "2013-08-02T05:00:00.000Z",
    "terminatedOn": null,
    "email": "danny.garza15@company.com",
    "phones": [
      {
        "type": "office",
        "number": "339-817-3591"
      },
      {
        "type": "home",
        "number": "731-282-5969"
      }
    ],
    "address": {
      "street": "7901 Adams St",
      "city": "Fresno",
      "state": "New York",
      "zip": "60350"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/ticklishbird555.jpg",
    "thumbnail": "portraits/ticklishbird555-thumb.jpg"
  },
  {
    "username": "crazyladybug288",
    "password": "flexible",
    "name": {
      "first": "Billy",
      "last": "Day"
    },
    "ssn": "676-69-4090",
    "dob": "1971-11-10T06:00:00.000Z",
    "hiredOn": "2003-05-27T05:00:00.000Z",
    "terminatedOn": null,
    "email": "billy.day28@company.com",
    "phones": [
      {
        "type": "office",
        "number": "836-287-5033"
      },
      {
        "type": "cell",
        "number": "397-471-4286"
      }
    ],
    "address": {
      "street": "7353 Poplar Dr",
      "city": "Cape Fear",
      "state": "Florida",
      "zip": "21960"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/crazyladybug288.jpg",
    "thumbnail": "portraits/crazyladybug288-thumb.jpg"
  },
  {
    "username": "whitetiger788",
    "password": "blue11",
    "name": {
      "first": "John",
      "last": "Smith"
    },
    "ssn": "471-25-5548",
    "dob": "1969-01-22T06:00:00.000Z",
    "hiredOn": "2005-02-15T06:00:00.000Z",
    "terminatedOn": null,
    "email": "eduardo.evans11@company.com",
    "phones": [
      {
        "type": "office",
        "number": "722-941-3054"
      },
      {
        "type": "cell",
        "number": "546-532-6709"
      }
    ],
    "address": {
      "street": "4569 Bollinger Rd",
      "city": "Rio Rancho",
      "state": "New Hampshire",
      "zip": "76595"
    },
    "roles": [
      "hourly",
      "part time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/whitetiger788.jpg",
    "thumbnail": "portraits/whitetiger788-thumb.jpg"
  },
  {
    "username": "crazygorilla336",
    "password": "ambrosia",
    "name": {
      "first": "Ida",
      "last": "Washington"
    },
    "ssn": "193-24-3701",
    "dob": "1970-01-27T06:00:00.000Z",
    "hiredOn": "2006-07-21T05:00:00.000Z",
    "terminatedOn": "2014-08-23T05:00:00.000Z",
    "email": "ida.washington26@company.com",
    "phones": [
      {
        "type": "office",
        "number": "200-143-8578"
      },
      {
        "type": "cell",
        "number": "381-658-8949"
      }
    ],
    "address": {
      "street": "4287 Mockingbird Hill",
      "city": "Richardson",
      "state": "Alaska",
      "zip": "31773"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/crazygorilla336.jpg",
    "thumbnail": "portraits/crazygorilla336-thumb.jpg"
  },
  {
    "username": "redladybug440",
    "password": "jayhawks",
    "name": {
      "first": "Caleb",
      "last": "Roberts"
    },
    "ssn": "231-49-4574",
    "dob": "1982-07-14T05:00:00.000Z",
    "hiredOn": "2013-07-25T05:00:00.000Z",
    "terminatedOn": null,
    "email": "caleb.roberts68@company.com",
    "phones": [
      {
        "type": "office",
        "number": "438-362-4715"
      },
      {
        "type": "home",
        "number": "875-350-5221"
      }
    ],
    "address": {
      "street": "9866 Prospect Rd",
      "city": "Helena",
      "state": "New York",
      "zip": "59451"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/redladybug440.jpg",
    "thumbnail": "portraits/redladybug440-thumb.jpg"
  },
  {
    "username": "brownmouse229",
    "password": "woody",
    "name": {
      "first": "William",
      "last": "Ferguson"
    },
    "ssn": "763-54-2087",
    "dob": "1977-07-22T05:00:00.000Z",
    "hiredOn": "2012-07-13T05:00:00.000Z",
    "terminatedOn": null,
    "email": "william.ferguson80@company.com",
    "phones": [
      {
        "type": "office",
        "number": "719-755-1713"
      },
      {
        "type": "cell",
        "number": "448-177-1376"
      }
    ],
    "address": {
      "street": "8773 Dogwood Ave",
      "city": "Saginaw",
      "state": "Delaware",
      "zip": "89333"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/brownmouse229.jpg",
    "thumbnail": "portraits/brownmouse229-thumb.jpg"
  },
  {
    "username": "silverrabbit923",
    "password": "arctic",
    "name": {
      "first": "Violet",
      "last": "Jackson"
    },
    "ssn": "650-58-9851",
    "dob": "1985-07-26T05:00:00.000Z",
    "hiredOn": "2013-10-03T05:00:00.000Z",
    "terminatedOn": null,
    "email": "violet.garrett26@company.com",
    "phones": [
      {
        "type": "office",
        "number": "837-318-1195"
      },
      {
        "type": "cell",
        "number": "763-286-4642"
      }
    ],
    "address": {
      "street": "8752 Frances Ct",
      "city": "Scurry",
      "state": "Rhode Island",
      "zip": "65101"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/silverrabbit923.jpg",
    "thumbnail": "portraits/silverrabbit923-thumb.jpg"
  },
  {
    "username": "tinysnake517",
    "password": "hammond",
    "name": {
      "first": "Adrian",
      "last": "Gibson"
    },
    "ssn": "425-62-1368",
    "dob": "1981-07-16T05:00:00.000Z",
    "hiredOn": "2010-05-13T05:00:00.000Z",
    "terminatedOn": null,
    "email": "adrian.gibson17@company.com",
    "phones": [
      {
        "type": "office",
        "number": "508-809-6806"
      },
      {
        "type": "cell",
        "number": "871-964-7356"
      }
    ],
    "address": {
      "street": "3464 Daisy Dr",
      "city": "Bakersfield",
      "state": "Virginia",
      "zip": "96113"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/tinysnake517.jpg",
    "thumbnail": "portraits/tinysnake517-thumb.jpg"
  },
  {
    "username": "greenpeacock556",
    "password": "fields",
    "name": {
      "first": "Frank",
      "last": "King"
    },
    "ssn": "511-48-4279",
    "dob": "1980-02-14T06:00:00.000Z",
    "hiredOn": "2001-03-21T06:00:00.000Z",
    "terminatedOn": "2010-10-10T05:00:00.000Z",
    "email": "frank.king99@company.com",
    "phones": [
      {
        "type": "office",
        "number": "535-843-8345"
      },
      {
        "type": "cell",
        "number": "805-340-9892"
      }
    ],
    "address": {
      "street": "6981 Hickory Creek Dr",
      "city": "Memphis",
      "state": "Montana",
      "zip": "57152"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/greenpeacock556.jpg",
    "thumbnail": "portraits/greenpeacock556-thumb.jpg"
  },
  {
    "username": "bigmouse194",
    "password": "archie",
    "name": {
      "first": "Jean",
      "last": "Gutierrez"
    },
    "ssn": "794-65-2926",
    "dob": "1967-05-12T05:00:00.000Z",
    "hiredOn": "2005-07-12T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jean.gutierrez30@company.com",
    "phones": [
      {
        "type": "office",
        "number": "124-371-6366"
      },
      {
        "type": "home",
        "number": "443-181-9202"
      }
    ],
    "address": {
      "street": "7797 W Sherman Dr",
      "city": "Roseburg",
      "state": "Kansas",
      "zip": "39296"
    },
    "roles": [
      "hourly",
      "part time",
      "consultant"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/bigmouse194.jpg",
    "thumbnail": "portraits/bigmouse194-thumb.jpg"
  },
  {
    "username": "tinyduck113",
    "password": "stormy",
    "name": {
      "first": "Johnny",
      "last": "West"
    },
    "ssn": "708-49-3024",
    "dob": "1980-07-09T05:00:00.000Z",
    "hiredOn": "2003-11-17T06:00:00.000Z",
    "terminatedOn": null,
    "email": "johnny.west78@company.com",
    "phones": [
      {
        "type": "office",
        "number": "312-461-8762"
      },
      {
        "type": "cell",
        "number": "229-828-9192"
      }
    ],
    "address": {
      "street": "8484 Wheeler Ridge Dr",
      "city": "Boise",
      "state": "Kentucky",
      "zip": "58413"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/tinyduck113.jpg",
    "thumbnail": "portraits/tinyduck113-thumb.jpg"
  },
  {
    "username": "crazyduck410",
    "password": "redbull",
    "name": {
      "first": "Teresa",
      "last": "Hernandez"
    },
    "ssn": "507-41-5349",
    "dob": "1990-12-05T06:00:00.000Z",
    "hiredOn": "2010-11-10T06:00:00.000Z",
    "terminatedOn": null,
    "email": "teresa.hernandez71@company.com",
    "phones": [
      {
        "type": "office",
        "number": "334-737-3241"
      },
      {
        "type": "cell",
        "number": "350-170-9847"
      }
    ],
    "address": {
      "street": "7306 Eason Rd",
      "city": "Celina",
      "state": "Tennessee",
      "zip": "95242"
    },
    "roles": [
      "hourly",
      "part time",
      "consultant"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/crazyduck410.jpg",
    "thumbnail": "portraits/crazyduck410-thumb.jpg"
  },
  {
    "username": "bigsnake928",
    "password": "bowser",
    "name": {
      "first": "Alan",
      "last": "Perez"
    },
    "ssn": "451-20-4741",
    "dob": "1979-02-18T06:00:00.000Z",
    "hiredOn": "2000-06-13T05:00:00.000Z",
    "terminatedOn": null,
    "email": "alan.perez33@company.com",
    "phones": [
      {
        "type": "office",
        "number": "629-933-9576"
      },
      {
        "type": "cell",
        "number": "227-222-2602"
      }
    ],
    "address": {
      "street": "7601 Hillcrest Rd",
      "city": "Flowermound",
      "state": "Wisconsin",
      "zip": "66388"
    },
    "roles": [
      "salaried",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/bigsnake928.jpg",
    "thumbnail": "portraits/bigsnake928-thumb.jpg"
  },
  {
    "username": "blackbird181",
    "password": "scully",
    "name": {
      "first": "Mario",
      "last": "Griffin"
    },
    "ssn": "914-41-9308",
    "dob": "1988-08-23T05:00:00.000Z",
    "hiredOn": "2012-08-21T05:00:00.000Z",
    "terminatedOn": null,
    "email": "mario.griffin65@company.com",
    "phones": [
      {
        "type": "office",
        "number": "256-228-3608"
      },
      {
        "type": "cell",
        "number": "229-930-4344"
      }
    ],
    "address": {
      "street": "8423 N Stelling Rd",
      "city": "Greensboro",
      "state": "Colorado",
      "zip": "51663"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/blackbird181.jpg",
    "thumbnail": "portraits/blackbird181-thumb.jpg"
  },
  {
    "username": "orangefrog731",
    "password": "kidrock",
    "name": {
      "first": "Chad",
      "last": "Ferguson"
    },
    "ssn": "898-40-4322",
    "dob": "1979-08-02T05:00:00.000Z",
    "hiredOn": "2000-12-20T06:00:00.000Z",
    "terminatedOn": null,
    "email": "chad.ferguson47@company.com",
    "phones": [
      {
        "type": "office",
        "number": "247-572-9586"
      },
      {
        "type": "home",
        "number": "212-276-8495"
      }
    ],
    "address": {
      "street": "8046 Sunset St",
      "city": "Buffalo",
      "state": "Michigan",
      "zip": "37081"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/orangefrog731.jpg",
    "thumbnail": "portraits/orangefrog731-thumb.jpg"
  },
  {
    "username": "blackpanda397",
    "password": "brucelee",
    "name": {
      "first": "Ethel",
      "last": "Hopkins"
    },
    "ssn": "822-74-9326",
    "dob": "1986-09-21T05:00:00.000Z",
    "hiredOn": "2014-06-23T05:00:00.000Z",
    "terminatedOn": null,
    "email": "ethel.hopkins76@company.com",
    "phones": [
      {
        "type": "office",
        "number": "146-195-7126"
      },
      {
        "type": "cell",
        "number": "625-156-2374"
      }
    ],
    "address": {
      "street": "4322 Spring St",
      "city": "Coppell",
      "state": "Wyoming",
      "zip": "55744"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/blackpanda397.jpg",
    "thumbnail": "portraits/blackpanda397-thumb.jpg"
  },
  {
    "username": "tinymouse298",
    "password": "pepe",
    "name": {
      "first": "Bruce",
      "last": "Lopez"
    },
    "ssn": "928-43-6868",
    "dob": "1992-07-09T05:00:00.000Z",
    "hiredOn": "2014-04-06T05:00:00.000Z",
    "terminatedOn": null,
    "email": "bruce.lopez12@company.com",
    "phones": [
      {
        "type": "office",
        "number": "485-381-7518"
      },
      {
        "type": "home",
        "number": "772-325-7612"
      }
    ],
    "address": {
      "street": "3769 E Pecan St",
      "city": "New York",
      "state": "Illinois",
      "zip": "66847"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/tinymouse298.jpg",
    "thumbnail": "portraits/tinymouse298-thumb.jpg"
  },
  {
    "username": "greenswan929",
    "password": "carole",
    "name": {
      "first": "Dolores",
      "last": "Evans"
    },
    "ssn": "155-57-9715",
    "dob": "1966-12-28T06:00:00.000Z",
    "hiredOn": "1990-07-17T05:00:00.000Z",
    "terminatedOn": null,
    "email": "dolores.evans74@company.com",
    "phones": [
      {
        "type": "office",
        "number": "282-627-3932"
      },
      {
        "type": "cell",
        "number": "806-561-8616"
      }
    ],
    "address": {
      "street": "7859 Shady Ln Dr",
      "city": "Bueblo",
      "state": "West Virginia",
      "zip": "14785"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/greenswan929.jpg",
    "thumbnail": "portraits/greenswan929-thumb.jpg"
  },
  {
    "username": "brownpeacock222",
    "password": "colonel",
    "name": {
      "first": "Anita",
      "last": "Bradley"
    },
    "ssn": "524-30-1616",
    "dob": "1980-12-14T06:00:00.000Z",
    "hiredOn": "2010-04-20T05:00:00.000Z",
    "terminatedOn": null,
    "email": "anita.bradley39@company.com",
    "phones": [
      {
        "type": "office",
        "number": "781-778-4265"
      },
      {
        "type": "home",
        "number": "427-589-2860"
      }
    ],
    "address": {
      "street": "9009 Lakeview St",
      "city": "Ironville",
      "state": "Arizona",
      "zip": "42410"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/brownpeacock222.jpg",
    "thumbnail": "portraits/brownpeacock222-thumb.jpg"
  },
  {
    "username": "ticklishpanda298",
    "password": "boston1",
    "name": {
      "first": "Valerie",
      "last": "Silva"
    },
    "ssn": "142-49-9181",
    "dob": "1981-06-09T05:00:00.000Z",
    "hiredOn": "2005-05-27T05:00:00.000Z",
    "terminatedOn": null,
    "email": "valerie.silva64@company.com",
    "phones": [
      {
        "type": "office",
        "number": "588-681-7507"
      },
      {
        "type": "home",
        "number": "401-873-3048"
      }
    ],
    "address": {
      "street": "1006 N Stelling Rd",
      "city": "Arlington",
      "state": "South Dakota",
      "zip": "22109"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/ticklishpanda298.jpg",
    "thumbnail": "portraits/ticklishpanda298-thumb.jpg"
  },
  {
    "username": "greenleopard467",
    "password": "tonight",
    "name": {
      "first": "Addison",
      "last": "Davis"
    },
    "ssn": "897-83-5426",
    "dob": "1975-11-26T06:00:00.000Z",
    "hiredOn": "2009-11-15T06:00:00.000Z",
    "terminatedOn": null,
    "email": "addison.davis55@company.com",
    "phones": [
      {
        "type": "office",
        "number": "416-771-5370"
      },
      {
        "type": "home",
        "number": "143-469-6126"
      }
    ],
    "address": {
      "street": "7328 Oak Lawn Ave",
      "city": "Detroit",
      "state": "Maryland",
      "zip": "74909"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/greenleopard467.jpg",
    "thumbnail": "portraits/greenleopard467-thumb.jpg"
  },
  {
    "username": "heavywolf437",
    "password": "godsmack",
    "name": {
      "first": "Dana",
      "last": "Gilbert"
    },
    "ssn": "763-66-5881",
    "dob": "1970-06-05T05:00:00.000Z",
    "hiredOn": "2000-11-21T06:00:00.000Z",
    "terminatedOn": null,
    "email": "dana.gilbert19@company.com",
    "phones": [
      {
        "type": "office",
        "number": "397-146-8036"
      },
      {
        "type": "home",
        "number": "206-932-1054"
      }
    ],
    "address": {
      "street": "4423 Mcgowen St",
      "city": "Rio Rancho",
      "state": "Kentucky",
      "zip": "52292"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/heavywolf437.jpg",
    "thumbnail": "portraits/heavywolf437-thumb.jpg"
  },
  {
    "username": "yellowtiger366",
    "password": "walmart",
    "name": {
      "first": "Sofia",
      "last": "Simpson"
    },
    "ssn": "174-60-6090",
    "dob": "1974-10-10T05:00:00.000Z",
    "hiredOn": "2007-01-08T06:00:00.000Z",
    "terminatedOn": null,
    "email": "sofia.simpson23@company.com",
    "phones": [
      {
        "type": "office",
        "number": "231-488-8035"
      },
      {
        "type": "cell",
        "number": "412-140-4066"
      }
    ],
    "address": {
      "street": "4838 Prospect Rd",
      "city": "Fayetteville",
      "state": "California",
      "zip": "79319"
    },
    "roles": [
      "hourly",
      "part time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/yellowtiger366.jpg",
    "thumbnail": "portraits/yellowtiger366-thumb.jpg"
  },
  {
    "username": "silversnake507",
    "password": "qwert123",
    "name": {
      "first": "Marion",
      "last": "Stevens"
    },
    "ssn": "976-21-4161",
    "dob": "1984-08-24T05:00:00.000Z",
    "hiredOn": "2014-11-09T06:00:00.000Z",
    "terminatedOn": null,
    "email": "marion.stevens84@company.com",
    "phones": [
      {
        "type": "office",
        "number": "810-259-1828"
      },
      {
        "type": "cell",
        "number": "779-570-4882"
      }
    ],
    "address": {
      "street": "9278 N Stelling Rd",
      "city": "Akron",
      "state": "Georgia",
      "zip": "70363"
    },
    "roles": [
      "salaried",
      "full time",
      "consultant"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/silversnake507.jpg",
    "thumbnail": "portraits/silversnake507-thumb.jpg"
  },
  {
    "username": "bluepanda354",
    "password": "eighteen",
    "name": {
      "first": "Bruce",
      "last": "Jennings"
    },
    "ssn": "215-86-7327",
    "dob": "1977-10-13T05:00:00.000Z",
    "hiredOn": "2011-04-08T05:00:00.000Z",
    "terminatedOn": null,
    "email": "bruce.jennings39@company.com",
    "phones": [
      {
        "type": "office",
        "number": "715-383-8584"
      },
      {
        "type": "cell",
        "number": "371-779-9592"
      }
    ],
    "address": {
      "street": "5292 W Belt Line Rd",
      "city": "Bozeman",
      "state": "Arkansas",
      "zip": "51891"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Marketing",
    "gender": "male",
    "portrait": "portraits/bluepanda354.jpg",
    "thumbnail": "portraits/bluepanda354-thumb.jpg"
  },
  {
    "username": "smallelephant887",
    "password": "duffy",
    "name": {
      "first": "Jayden",
      "last": "Ellis"
    },
    "ssn": "203-69-5427",
    "dob": "1985-10-16T05:00:00.000Z",
    "hiredOn": "2010-05-15T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jayden.ellis72@company.com",
    "phones": [
      {
        "type": "office",
        "number": "982-115-6203"
      },
      {
        "type": "cell",
        "number": "401-370-7133"
      }
    ],
    "address": {
      "street": "1232 Valley View Ln",
      "city": "Nampa",
      "state": "Montana",
      "zip": "10433"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/smallelephant887.jpg",
    "thumbnail": "portraits/smallelephant887-thumb.jpg"
  },
  {
    "username": "yellowdog110",
    "password": "gerald",
    "name": {
      "first": "Christine",
      "last": "Duncan"
    },
    "ssn": "192-17-4890",
    "dob": "1985-08-09T05:00:00.000Z",
    "hiredOn": "2013-02-09T06:00:00.000Z",
    "terminatedOn": null,
    "email": "christine.duncan51@company.com",
    "phones": [
      {
        "type": "office",
        "number": "697-548-9530"
      },
      {
        "type": "cell",
        "number": "501-966-3730"
      }
    ],
    "address": {
      "street": "5945 Groveland Terrace",
      "city": "Long Beach",
      "state": "Massachusetts",
      "zip": "11370"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/yellowdog110.jpg",
    "thumbnail": "portraits/yellowdog110-thumb.jpg"
  },
  {
    "username": "bluetiger546",
    "password": "shirley",
    "name": {
      "first": "Hugh",
      "last": "Gonzalez"
    },
    "ssn": "259-92-3643",
    "dob": "1965-07-18T05:00:00.000Z",
    "hiredOn": "2013-10-28T05:00:00.000Z",
    "terminatedOn": null,
    "email": "hugh.gonzalez84@company.com",
    "phones": [
      {
        "type": "office",
        "number": "496-473-1334"
      },
      {
        "type": "cell",
        "number": "446-963-4960"
      }
    ],
    "address": {
      "street": "7653 Bollinger Rd",
      "city": "Ironville",
      "state": "Colorado",
      "zip": "10603"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/bluetiger546.jpg",
    "thumbnail": "portraits/bluetiger546-thumb.jpg"
  },
  {
    "username": "orangegorilla363",
    "password": "guai",
    "name": {
      "first": "Oscar",
      "last": "Graham"
    },
    "ssn": "238-87-4269",
    "dob": "1992-06-19T05:00:00.000Z",
    "hiredOn": "2012-12-16T06:00:00.000Z",
    "terminatedOn": "2013-04-01T05:00:00.000Z",
    "email": "oscar.graham49@company.com",
    "phones": [
      {
        "type": "office",
        "number": "825-107-8912"
      },
      {
        "type": "cell",
        "number": "423-781-2687"
      }
    ],
    "address": {
      "street": "6485 E Pecan St",
      "city": "San Jose",
      "state": "Wyoming",
      "zip": "18410"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/orangegorilla363.jpg",
    "thumbnail": "portraits/orangegorilla363-thumb.jpg"
  },
  {
    "username": "goldenfrog222",
    "password": "licking",
    "name": {
      "first": "Rick",
      "last": "Steward"
    },
    "ssn": "525-90-1892",
    "dob": "1976-01-15T06:00:00.000Z",
    "hiredOn": "2006-11-04T06:00:00.000Z",
    "terminatedOn": null,
    "email": "rick.steward34@company.com",
    "phones": [
      {
        "type": "office",
        "number": "649-587-9135"
      },
      {
        "type": "home",
        "number": "941-914-9436"
      }
    ],
    "address": {
      "street": "1012 Cackson St",
      "city": "New York",
      "state": "Washington",
      "zip": "81852"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/goldenfrog222.jpg",
    "thumbnail": "portraits/goldenfrog222-thumb.jpg"
  },
  {
    "username": "greenostrich439",
    "password": "jjjjjjjj",
    "name": {
      "first": "Erin",
      "last": "Fields"
    },
    "ssn": "930-45-5968",
    "dob": "1985-01-06T06:00:00.000Z",
    "hiredOn": "2006-12-26T06:00:00.000Z",
    "terminatedOn": null,
    "email": "erin.fields25@company.com",
    "phones": [
      {
        "type": "office",
        "number": "502-113-6330"
      },
      {
        "type": "cell",
        "number": "449-232-5911"
      }
    ],
    "address": {
      "street": "5902 Cackson St",
      "city": "Iowa Park",
      "state": "Georgia",
      "zip": "12318"
    },
    "roles": [
      "hourly",
      "part time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/greenostrich439.jpg",
    "thumbnail": "portraits/greenostrich439-thumb.jpg"
  },
  {
    "username": "silverwolf910",
    "password": "females",
    "name": {
      "first": "Laurie",
      "last": "Mendoza"
    },
    "ssn": "248-87-5878",
    "dob": "1992-06-24T05:00:00.000Z",
    "hiredOn": "2012-01-24T06:00:00.000Z",
    "terminatedOn": null,
    "email": "laurie.mendoza32@company.com",
    "phones": [
      {
        "type": "office",
        "number": "336-423-8620"
      },
      {
        "type": "cell",
        "number": "977-896-2085"
      }
    ],
    "address": {
      "street": "1702 E North St",
      "city": "Akron",
      "state": "Tennessee",
      "zip": "40491"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/silverwolf910.jpg",
    "thumbnail": "portraits/silverwolf910-thumb.jpg"
  },
  {
    "username": "yellowpanda940",
    "password": "kirby",
    "name": {
      "first": "Jar",
      "last": "Stephens"
    },
    "ssn": "719-19-9375",
    "dob": "1968-01-21T06:00:00.000Z",
    "hiredOn": "2000-09-12T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jar.stephens97@company.com",
    "phones": [
      {
        "type": "office",
        "number": "395-431-1017"
      },
      {
        "type": "cell",
        "number": "202-381-1445"
      }
    ],
    "address": {
      "street": "3018 College St",
      "city": "Modesto",
      "state": "Arkansas",
      "zip": "73473"
    },
    "roles": [
      "salaried",
      "part time",
      "consultant"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/yellowpanda940.jpg",
    "thumbnail": "portraits/yellowpanda940-thumb.jpg"
  },
  {
    "username": "redbutterfly240",
    "password": "giovanna",
    "name": {
      "first": "Willard",
      "last": "Fletcher"
    },
    "ssn": "290-42-6103",
    "dob": "1990-11-07T06:00:00.000Z",
    "hiredOn": "2011-05-25T05:00:00.000Z",
    "terminatedOn": null,
    "email": "willard.fletcher49@company.com",
    "phones": [
      {
        "type": "office",
        "number": "502-338-7450"
      },
      {
        "type": "cell",
        "number": "206-479-1143"
      }
    ],
    "address": {
      "street": "3053 Pockrus Page Rd",
      "city": "Ennis",
      "state": "Florida",
      "zip": "36901"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/redbutterfly240.jpg",
    "thumbnail": "portraits/redbutterfly240-thumb.jpg"
  },
  {
    "username": "purplemeercat491",
    "password": "stop",
    "name": {
      "first": "Francisco",
      "last": "Jackson"
    },
    "ssn": "210-35-1042",
    "dob": "1977-12-28T06:00:00.000Z",
    "hiredOn": "2010-08-11T05:00:00.000Z",
    "terminatedOn": null,
    "email": "francisco.fuller20@company.com",
    "phones": [
      {
        "type": "office",
        "number": "403-793-1023"
      },
      {
        "type": "cell",
        "number": "708-256-4840"
      }
    ],
    "address": {
      "street": "7860 W Belt Line Rd",
      "city": "Spokane",
      "state": "Vermont",
      "zip": "33554"
    },
    "roles": [
      "hourly",
      "part time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/purplemeercat491.jpg",
    "thumbnail": "portraits/purplemeercat491-thumb.jpg"
  },
  {
    "username": "heavyladybug740",
    "password": "lesbean",
    "name": {
      "first": "Jordan",
      "last": "Fox"
    },
    "ssn": "101-22-4999",
    "dob": "1974-02-08T05:00:00.000Z",
    "hiredOn": "1994-08-03T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jordan.fox20@company.com",
    "phones": [
      {
        "type": "office",
        "number": "679-333-9533"
      },
      {
        "type": "cell",
        "number": "825-905-4480"
      }
    ],
    "address": {
      "street": "1533 College St",
      "city": "Wichita Falls",
      "state": "Washington",
      "zip": "82600"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "male",
    "portrait": "portraits/heavyladybug740.jpg",
    "thumbnail": "portraits/heavyladybug740-thumb.jpg"
  },
  {
    "username": "yellowwolf751",
    "password": "chevy1",
    "name": {
      "first": "Cherly",
      "last": "Stone"
    },
    "ssn": "417-71-9261",
    "dob": "1987-12-06T06:00:00.000Z",
    "hiredOn": "2013-01-16T06:00:00.000Z",
    "terminatedOn": null,
    "email": "cherly.stone88@company.com",
    "phones": [
      {
        "type": "office",
        "number": "516-521-1989"
      },
      {
        "type": "cell",
        "number": "339-446-4908"
      }
    ],
    "address": {
      "street": "2771 Nowlin Rd",
      "city": "Altoona",
      "state": "Vermont",
      "zip": "16764"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/yellowwolf751.jpg",
    "thumbnail": "portraits/yellowwolf751-thumb.jpg"
  },
  {
    "username": "whitekoala266",
    "password": "abcdefg",
    "name": {
      "first": "Raymond",
      "last": "Cox"
    },
    "ssn": "663-71-1383",
    "dob": "1965-08-03T05:00:00.000Z",
    "hiredOn": "2001-12-27T06:00:00.000Z",
    "terminatedOn": null,
    "email": "raymond.cox19@company.com",
    "phones": [
      {
        "type": "office",
        "number": "137-314-5474"
      },
      {
        "type": "home",
        "number": "469-793-7760"
      }
    ],
    "address": {
      "street": "8004 Karen Dr",
      "city": "Bernalillo",
      "state": "Nevada",
      "zip": "12206"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "male",
    "portrait": "portraits/whitekoala266.jpg",
    "thumbnail": "portraits/whitekoala266-thumb.jpg"
  },
  {
    "username": "silvermouse687",
    "password": "passwor",
    "name": {
      "first": "Julie",
      "last": "Kennedy"
    },
    "ssn": "935-53-6295",
    "dob": "1992-11-09T06:00:00.000Z",
    "hiredOn": "2013-06-04T05:00:00.000Z",
    "terminatedOn": null,
    "email": "julie.kennedy76@company.com",
    "phones": [
      {
        "type": "office",
        "number": "215-320-9431"
      },
      {
        "type": "cell",
        "number": "149-389-9860"
      }
    ],
    "address": {
      "street": "5458 Elgin St",
      "city": "Ironville",
      "state": "Washington",
      "zip": "80109"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/silvermouse687.jpg",
    "thumbnail": "portraits/silvermouse687-thumb.jpg"
  },
  {
    "username": "blackbird733",
    "password": "roadrunn",
    "name": {
      "first": "Marvin",
      "last": "Mendoza"
    },
    "ssn": "132-14-9468",
    "dob": "1968-03-20T05:00:00.000Z",
    "hiredOn": "2002-05-24T05:00:00.000Z",
    "terminatedOn": "2014-12-04T06:00:00.000Z",
    "email": "marvin.mendoza63@company.com",
    "phones": [
      {
        "type": "office",
        "number": "283-344-9964"
      },
      {
        "type": "cell",
        "number": "448-708-7720"
      }
    ],
    "address": {
      "street": "4783 Bollinger Rd",
      "city": "Evansville",
      "state": "Tennessee",
      "zip": "22864"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/blackbird733.jpg",
    "thumbnail": "portraits/blackbird733-thumb.jpg"
  },
  {
    "username": "orangeostrich499",
    "password": "admin",
    "name": {
      "first": "Adrian",
      "last": "Newman"
    },
    "ssn": "694-44-5755",
    "dob": "1992-09-21T05:00:00.000Z",
    "hiredOn": "2012-10-05T05:00:00.000Z",
    "terminatedOn": null,
    "email": "adrian.newman12@company.com",
    "phones": [
      {
        "type": "office",
        "number": "170-580-5618"
      },
      {
        "type": "cell",
        "number": "582-604-6812"
      }
    ],
    "address": {
      "street": "5031 Wheeler Ridge Dr",
      "city": "Cape Fear",
      "state": "Arkansas",
      "zip": "63417"
    },
    "roles": [
      "salaried",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/orangeostrich499.jpg",
    "thumbnail": "portraits/orangeostrich499-thumb.jpg"
  },
  {
    "username": "blackpeacock213",
    "password": "adam",
    "name": {
      "first": "Caleb",
      "last": "Payne"
    },
    "ssn": "429-30-8902",
    "dob": "1967-10-10T05:00:00.000Z",
    "hiredOn": "1998-10-26T06:00:00.000Z",
    "terminatedOn": null,
    "email": "caleb.payne82@company.com",
    "phones": [
      {
        "type": "office",
        "number": "600-510-4633"
      },
      {
        "type": "cell",
        "number": "237-394-9712"
      }
    ],
    "address": {
      "street": "3852 W Belt Line Rd",
      "city": "Addison",
      "state": "Kansas",
      "zip": "11974"
    },
    "roles": [
      "salaried",
      "part time",
      "contractor"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/blackpeacock213.jpg",
    "thumbnail": "portraits/blackpeacock213-thumb.jpg"
  },
  {
    "username": "orangebird478",
    "password": "tiao",
    "name": {
      "first": "Claude",
      "last": "Reynolds"
    },
    "ssn": "975-65-5176",
    "dob": "1968-12-10T06:00:00.000Z",
    "hiredOn": "2003-02-18T06:00:00.000Z",
    "terminatedOn": null,
    "email": "claude.reynolds96@company.com",
    "phones": [
      {
        "type": "office",
        "number": "473-289-7149"
      },
      {
        "type": "home",
        "number": "824-477-4534"
      }
    ],
    "address": {
      "street": "5427 Mockingbird Hill",
      "city": "Charlotte",
      "state": "Illinois",
      "zip": "82867"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/orangebird478.jpg",
    "thumbnail": "portraits/orangebird478-thumb.jpg"
  },
  {
    "username": "organicbear74",
    "password": "peekaboo",
    "name": {
      "first": "Debra",
      "last": "Graham"
    },
    "ssn": "865-63-3819",
    "dob": "1975-03-15T05:00:00.000Z",
    "hiredOn": "2011-06-11T05:00:00.000Z",
    "terminatedOn": null,
    "email": "debra.graham23@company.com",
    "phones": [
      {
        "type": "office",
        "number": "884-907-7043"
      },
      {
        "type": "cell",
        "number": "211-858-5744"
      }
    ],
    "address": {
      "street": "3754 Paddock Way",
      "city": "Frisco",
      "state": "Colorado",
      "zip": "11862"
    },
    "roles": [
      "salaried",
      "employee",
      "part time"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/organicbear74.jpg",
    "thumbnail": "portraits/organicbear74-thumb.jpg"
  },
  {
    "username": "smallfrog632",
    "password": "fetish",
    "name": {
      "first": "Kurt",
      "last": "Lee"
    },
    "ssn": "497-12-7480",
    "dob": "1975-12-15T06:00:00.000Z",
    "hiredOn": "2006-03-14T06:00:00.000Z",
    "terminatedOn": null,
    "email": "kurt.lee70@company.com",
    "phones": [
      {
        "type": "office",
        "number": "132-648-9127"
      },
      {
        "type": "cell",
        "number": "106-162-9940"
      }
    ],
    "address": {
      "street": "5434 Washington Ave",
      "city": "Henderson",
      "state": "South Carolina",
      "zip": "79836"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/smallfrog632.jpg",
    "thumbnail": "portraits/smallfrog632-thumb.jpg"
  },
  {
    "username": "tinykoala298",
    "password": "marian",
    "name": {
      "first": "Noelle",
      "last": "Smith"
    },
    "ssn": "773-65-4386",
    "dob": "1975-10-07T05:00:00.000Z",
    "hiredOn": "2010-06-18T05:00:00.000Z",
    "terminatedOn": null,
    "email": "noelle.jensen55@company.com",
    "phones": [
      {
        "type": "office",
        "number": "296-963-5474"
      },
      {
        "type": "cell",
        "number": "437-306-3417"
      }
    ],
    "address": {
      "street": "5610 W Dallas St",
      "city": "Las Vegas",
      "state": "Washington",
      "zip": "99608"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/tinykoala298.jpg",
    "thumbnail": "portraits/tinykoala298-thumb.jpg"
  },
  {
    "username": "redwolf207",
    "password": "solitude",
    "name": {
      "first": "Herminia",
      "last": "Kuhn"
    },
    "ssn": "617-78-2346",
    "dob": "1975-04-28T05:00:00.000Z",
    "hiredOn": "2009-05-24T05:00:00.000Z",
    "terminatedOn": null,
    "email": "herminia.kuhn17@company.com",
    "phones": [
      {
        "type": "office",
        "number": "220-707-2618"
      },
      {
        "type": "home",
        "number": "823-808-3306"
      }
    ],
    "address": {
      "street": "9197 N Stelling Rd",
      "city": "Akron",
      "state": "New Mexico",
      "zip": "49632"
    },
    "roles": [
      "salaried",
      "part time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/redwolf207.jpg",
    "thumbnail": "portraits/redwolf207-thumb.jpg"
  },
  {
    "username": "goldenkoala942",
    "password": "peaches",
    "name": {
      "first": "Marlene",
      "last": "Fuller"
    },
    "ssn": "570-43-4276",
    "dob": "1979-09-09T05:00:00.000Z",
    "hiredOn": "2007-03-03T06:00:00.000Z",
    "terminatedOn": null,
    "email": "marlene.fuller32@company.com",
    "phones": [
      {
        "type": "office",
        "number": "276-900-6352"
      },
      {
        "type": "cell",
        "number": "232-713-2109"
      }
    ],
    "address": {
      "street": "5995 Hogan St",
      "city": "Flowermound",
      "state": "Arizona",
      "zip": "45221"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/goldenkoala942.jpg",
    "thumbnail": "portraits/goldenkoala942-thumb.jpg"
  },
  {
    "username": "lazymeercat712",
    "password": "pompey",
    "name": {
      "first": "Anna",
      "last": "Byrd"
    },
    "ssn": "764-55-7466",
    "dob": "1980-07-13T05:00:00.000Z",
    "hiredOn": "2004-06-28T05:00:00.000Z",
    "terminatedOn": null,
    "email": "anna.byrd35@company.com",
    "phones": [
      {
        "type": "office",
        "number": "588-436-1276"
      },
      {
        "type": "cell",
        "number": "717-780-1583"
      }
    ],
    "address": {
      "street": "1640 Royal Ln",
      "city": "Cedar Hill",
      "state": "New Jersey",
      "zip": "82919"
    },
    "roles": [
      "salaried",
      "part time",
      "contractor"
    ],
    "department": "Human Resources",
    "gender": "female",
    "portrait": "portraits/lazymeercat712.jpg",
    "thumbnail": "portraits/lazymeercat712-thumb.jpg"
  },
  {
    "username": "purplepanda527",
    "password": "cocacola",
    "name": {
      "first": "Gail",
      "last": "Holland"
    },
    "ssn": "823-44-4175",
    "dob": "1972-06-26T05:00:00.000Z",
    "hiredOn": "1996-07-14T05:00:00.000Z",
    "terminatedOn": null,
    "email": "gail.holland86@company.com",
    "phones": [
      {
        "type": "office",
        "number": "559-236-8495"
      },
      {
        "type": "cell",
        "number": "639-765-8551"
      }
    ],
    "address": {
      "street": "9537 W Belt Line Rd",
      "city": "Tacoma",
      "state": "Georgia",
      "zip": "90209"
    },
    "roles": [
      "salaried",
      "part time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/purplepanda527.jpg",
    "thumbnail": "portraits/purplepanda527-thumb.jpg"
  },
  {
    "username": "ticklishlion619",
    "password": "geronimo",
    "name": {
      "first": "Alfred",
      "last": "Ford"
    },
    "ssn": "863-30-6761",
    "dob": "1974-09-01T05:00:00.000Z",
    "hiredOn": "2007-08-10T05:00:00.000Z",
    "terminatedOn": null,
    "email": "alfred.ford66@company.com",
    "phones": [
      {
        "type": "office",
        "number": "875-831-8488"
      },
      {
        "type": "cell",
        "number": "832-492-3211"
      }
    ],
    "address": {
      "street": "2874 Woodland St",
      "city": "Provo",
      "state": "Illinois",
      "zip": "63907"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/ticklishlion619.jpg",
    "thumbnail": "portraits/ticklishlion619-thumb.jpg"
  },
  {
    "username": "goldenbird725",
    "password": "pyramid",
    "name": {
      "first": "Jesus",
      "last": "Miller"
    },
    "ssn": "264-76-4495",
    "dob": "1987-09-07T05:00:00.000Z",
    "hiredOn": "2013-08-15T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jesus.miller16@company.com",
    "phones": [
      {
        "type": "office",
        "number": "470-998-3892"
      },
      {
        "type": "home",
        "number": "693-601-3471"
      }
    ],
    "address": {
      "street": "1543 Locust Rd",
      "city": "Ironville",
      "state": "Michigan",
      "zip": "83919"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/goldenbird725.jpg",
    "thumbnail": "portraits/goldenbird725-thumb.jpg"
  },
  {
    "username": "whitebutterfly382",
    "password": "abigail",
    "name": {
      "first": "Lewis",
      "last": "Smith"
    },
    "ssn": "638-57-1396",
    "dob": "1972-10-15T05:00:00.000Z",
    "hiredOn": "2014-09-19T05:00:00.000Z",
    "terminatedOn": null,
    "email": "lewis.harris88@company.com",
    "phones": [
      {
        "type": "office",
        "number": "424-974-5764"
      },
      {
        "type": "cell",
        "number": "922-776-3545"
      }
    ],
    "address": {
      "street": "7251 Walnut Hill Ln",
      "city": "Scurry",
      "state": "Oregon",
      "zip": "36713"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/whitebutterfly382.jpg",
    "thumbnail": "portraits/whitebutterfly382-thumb.jpg"
  },
  {
    "username": "heavysnake634",
    "password": "feet",
    "name": {
      "first": "Ralph",
      "last": "Rogers"
    },
    "ssn": "446-15-1994",
    "dob": "1976-08-06T05:00:00.000Z",
    "hiredOn": "2004-09-05T05:00:00.000Z",
    "terminatedOn": "2011-01-20T06:00:00.000Z",
    "email": "ralph.rogers82@company.com",
    "phones": [
      {
        "type": "office",
        "number": "822-649-3585"
      },
      {
        "type": "home",
        "number": "717-864-4681"
      }
    ],
    "address": {
      "street": "1789 E Pecan St",
      "city": "Billings",
      "state": "Oregon",
      "zip": "72485"
    },
    "roles": [
      "hourly",
      "full time",
      "contractor"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/heavysnake634.jpg",
    "thumbnail": "portraits/heavysnake634-thumb.jpg"
  },
  {
    "username": "blackrabbit3",
    "password": "nascar",
    "name": {
      "first": "Joyce",
      "last": "Sanders"
    },
    "ssn": "322-55-9315",
    "dob": "1973-07-19T05:00:00.000Z",
    "hiredOn": "1994-03-09T06:00:00.000Z",
    "terminatedOn": "2010-09-17T05:00:00.000Z",
    "email": "joyce.sanders18@company.com",
    "phones": [
      {
        "type": "office",
        "number": "624-778-9078"
      },
      {
        "type": "cell",
        "number": "575-103-8102"
      }
    ],
    "address": {
      "street": "9367 Sunset St",
      "city": "Fort Collins",
      "state": "New Jersey",
      "zip": "80069"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Marketing",
    "gender": "female",
    "portrait": "portraits/blackrabbit3.jpg",
    "thumbnail": "portraits/blackrabbit3-thumb.jpg"
  },
  {
    "username": "goldenbutterfly797",
    "password": "volleyba",
    "name": {
      "first": "Frank",
      "last": "Davidson"
    },
    "ssn": "981-63-8784",
    "dob": "1979-09-07T05:00:00.000Z",
    "hiredOn": "2013-10-19T05:00:00.000Z",
    "terminatedOn": null,
    "email": "frank.davidson56@company.com",
    "phones": [
      {
        "type": "office",
        "number": "754-580-8185"
      },
      {
        "type": "cell",
        "number": "115-924-8821"
      }
    ],
    "address": {
      "street": "4606 Eason Rd",
      "city": "Grants Pass",
      "state": "South Dakota",
      "zip": "98742"
    },
    "roles": [
      "hourly",
      "part time",
      "contractor"
    ],
    "department": "Human Resources",
    "gender": "male",
    "portrait": "portraits/goldenbutterfly797.jpg",
    "thumbnail": "portraits/goldenbutterfly797-thumb.jpg"
  },
  {
    "username": "silverbird464",
    "password": "lotus",
    "name": {
      "first": "Dean",
      "last": "Bradley"
    },
    "ssn": "380-81-9874",
    "dob": "1974-04-01T05:00:00.000Z",
    "hiredOn": "2005-03-06T06:00:00.000Z",
    "terminatedOn": null,
    "email": "dean.bradley13@company.com",
    "phones": [
      {
        "type": "office",
        "number": "147-490-5928"
      },
      {
        "type": "cell",
        "number": "222-975-7319"
      }
    ],
    "address": {
      "street": "3020 Lakeshore Rd",
      "city": "Detroit",
      "state": "New Mexico",
      "zip": "59742"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/silverbird464.jpg",
    "thumbnail": "portraits/silverbird464-thumb.jpg"
  },
  {
    "username": "blackdog47",
    "password": "sentnece",
    "name": {
      "first": "Georgia",
      "last": "Douglas"
    },
    "ssn": "601-61-2114",
    "dob": "1992-05-09T05:00:00.000Z",
    "hiredOn": "2013-03-03T06:00:00.000Z",
    "terminatedOn": null,
    "email": "georgia.douglas28@company.com",
    "phones": [
      {
        "type": "office",
        "number": "298-750-5135"
      },
      {
        "type": "cell",
        "number": "422-510-6475"
      }
    ],
    "address": {
      "street": "4677 Ranchview Dr",
      "city": "Columbus",
      "state": "North Dakota",
      "zip": "16002"
    },
    "roles": [
      "hourly",
      "full time",
      "consultant"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/blackdog47.jpg",
    "thumbnail": "portraits/blackdog47-thumb.jpg"
  },
  {
    "username": "goldenpeacock175",
    "password": "nomore",
    "name": {
      "first": "Steven",
      "last": "Vasquez"
    },
    "ssn": "703-83-8585",
    "dob": "1982-01-05T06:00:00.000Z",
    "hiredOn": "2002-01-20T06:00:00.000Z",
    "terminatedOn": null,
    "email": "steven.vasquez91@company.com",
    "phones": [
      {
        "type": "office",
        "number": "911-246-2449"
      },
      {
        "type": "cell",
        "number": "782-269-2330"
      }
    ],
    "address": {
      "street": "3199 Country Club Rd",
      "city": "Fremont",
      "state": "Virginia",
      "zip": "94390"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Marketing",
    "gender": "male",
    "portrait": "portraits/goldenpeacock175.jpg",
    "thumbnail": "portraits/goldenpeacock175-thumb.jpg"
  },
  {
    "username": "smallwolf576",
    "password": "hang",
    "name": {
      "first": "Christy",
      "last": "Bell"
    },
    "ssn": "467-35-3485",
    "dob": "1983-06-10T05:00:00.000Z",
    "hiredOn": "2006-01-18T06:00:00.000Z",
    "terminatedOn": null,
    "email": "christy.bell39@company.com",
    "phones": [
      {
        "type": "office",
        "number": "555-316-9657"
      },
      {
        "type": "home",
        "number": "138-427-4789"
      }
    ],
    "address": {
      "street": "6055 Royal Ln",
      "city": "Fresno",
      "state": "New Hampshire",
      "zip": "12031"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "female",
    "portrait": "portraits/smallwolf576.jpg",
    "thumbnail": "portraits/smallwolf576-thumb.jpg"
  },
  {
    "username": "bluemeercat298",
    "password": "xanadu",
    "name": {
      "first": "Herbert",
      "last": "Wells"
    },
    "ssn": "432-28-2900",
    "dob": "1968-03-01T06:00:00.000Z",
    "hiredOn": "2011-04-13T05:00:00.000Z",
    "terminatedOn": null,
    "email": "herbert.wells85@company.com",
    "phones": [
      {
        "type": "office",
        "number": "429-427-5388"
      },
      {
        "type": "cell",
        "number": "447-487-6709"
      }
    ],
    "address": {
      "street": "7957 Wheeler Ridge Dr",
      "city": "Buffalo",
      "state": "Tennessee",
      "zip": "12974"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/bluemeercat298.jpg",
    "thumbnail": "portraits/bluemeercat298-thumb.jpg"
  },
  {
    "username": "yellowleopard565",
    "password": "goodbye",
    "name": {
      "first": "Nelson",
      "last": "Byrd"
    },
    "ssn": "733-68-9898",
    "dob": "1978-06-27T05:00:00.000Z",
    "hiredOn": "2001-09-11T05:00:00.000Z",
    "terminatedOn": null,
    "email": "nelson.byrd85@company.com",
    "phones": [
      {
        "type": "office",
        "number": "439-787-7054"
      },
      {
        "type": "home",
        "number": "762-977-4795"
      }
    ],
    "address": {
      "street": "4771 Homestead Rd",
      "city": "Greeley",
      "state": "Massachusetts",
      "zip": "40813"
    },
    "roles": [
      "salaried",
      "full time",
      "employee"
    ],
    "department": "Sales",
    "gender": "male",
    "portrait": "portraits/yellowleopard565.jpg",
    "thumbnail": "portraits/yellowleopard565-thumb.jpg"
  },
  {
    "username": "redtiger449",
    "password": "jerome",
    "name": {
      "first": "Morris",
      "last": "Moreno"
    },
    "ssn": "283-90-9368",
    "dob": "1972-04-25T06:00:00.000Z",
    "hiredOn": "2006-05-03T05:00:00.000Z",
    "terminatedOn": null,
    "email": "morris.moreno77@company.com",
    "phones": [
      {
        "type": "office",
        "number": "432-353-4425"
      },
      {
        "type": "cell",
        "number": "607-827-7813"
      }
    ],
    "address": {
      "street": "9979 Poplar Dr",
      "city": "Salt Lake City",
      "state": "Maine",
      "zip": "46924"
    },
    "roles": [
      "hourly",
      "full time",
      "employee"
    ],
    "department": "Accounting",
    "gender": "male",
    "portrait": "portraits/redtiger449.jpg",
    "thumbnail": "portraits/redtiger449-thumb.jpg"
  },
  {
    "username": "greengoose892",
    "password": "design",
    "name": {
      "first": "Jane",
      "last": "Hill"
    },
    "ssn": "523-74-4162",
    "dob": "1982-08-10T05:00:00.000Z",
    "hiredOn": "2002-04-26T05:00:00.000Z",
    "terminatedOn": null,
    "email": "jane.hill56@company.com",
    "phones": [
      {
        "type": "office",
        "number": "700-273-4086"
      },
      {
        "type": "home",
        "number": "709-194-7288"
      }
    ],
    "address": {
      "street": "2523 Taylor St",
      "city": "Bozeman",
      "state": "Maine",
      "zip": "52829"
    },
    "roles": [
      "salaried",
      "full time",
      "contractor"
    ],
    "department": "Accounting",
    "gender": "female",
    "portrait": "portraits/greengoose892.jpg",
    "thumbnail": "portraits/greengoose892-thumb.jpg"
  }
]
},{}],2:[function(require,module,exports){
'use strict';

// Start with the raw JSON data
var employees = require('../employees.json');
var projects = require('../projects.json');

// Clone the JSON data, so that the original data is left unchanged,
// and can still be accessed via require('static-mock-data/employees.json')
employees = cloneDeep(employees);
projects = cloneDeep(projects);

// Convert JSON date strings to JavaScript Date objects
reviveDates(employees, ['dob', 'hiredOn', 'terminatedOn']);
reviveDates(projects, ['startedOn', 'endedOn']);

module.exports = {
  /**
   * An array of employee objects with username, password, email, etc.
   *
   * @type {object[]}
   */
  employees: employees,

  /**
   * An array of project objects with id, name, department, etc.
   *
   * @type {object[]}
   */
  projects: projects,
};

/**
 * Deep-clones a JSON object or array.
 *
 * @param {object|array} obj
 * @returns {object|array}
 */
function cloneDeep (obj) {
  var clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (value && typeof value === 'object') {
      value = cloneDeep(value);
    }
    clone[key] = value;
  });

  return clone;
}

/**
 * Converts JSON date string properties to JavaScript Date objects.
 *
 * @param {object[]} array - An array of objects to revive
 * @param {string[]} dateFields - An array of field names to Convert
 * @returns {object[]}
 */
function reviveDates (array, dateFields) {
  array.forEach(function (obj) {
    dateFields.forEach(function (field) {
      var value = obj[field];
      if (value && typeof value === 'string') {
        obj[field] = new Date(value);
      }
    });
  });

  return array;
}

},{"../employees.json":1,"../projects.json":3}],3:[function(require,module,exports){
module.exports=[
  {
    "id": 892281,
    "name": "Win-Win Global Efficient Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "2002-07-19T05:00:00.000Z",
    "endedOn": "2012-09-12T05:00:00.000Z",
    "assigned": [
     "whitecat698",
     "whitepeacock532",
     "ticklishgorilla951",
      "yellowbird585"
    ],
    "description": "Ethically growing iteratively customer-focused prince2 practitioners is crucial to our immersive synergy. Our business virtualises core assets to intelligently and proactively incentivize our long-term architecture. So we can hit the ground running, we will be virtually calibrating every enterprise in our space. Key players will take ownership of their core competencies by effectively connecting best-in-class diversities.\n\nGoing forward, our proactive low hanging fruit will deliver value to market foci. Key players will take ownership of their team players by proactively synergising best-of-breed step-changes. In the future, will you be able to virtually leverage visibilities in your business? Change the way you do business - adopt holistic ballpark figures."
  },
  {
    "id": 494072,
    "name": "Touch Enabled Outsourcing Analytics",
    "department": "Sales",
    "startedOn": "2009-01-13T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "blackbird733",
     "orangeostrich499",
     "ticklishbutterfly1",
     "greenswan929",
     "redladybug440",
     "blackpanda397",
     "yellowdog110",
     "bluegorilla84",
      "smallwolf576"
    ],
    "description": "Efficiencies will come from proactively growing our market foci. Going forward, our mobile paradigm shift will deliver value to big datas. Going forward, our immersive agile workflow will deliver value to enterprises. Key players will take ownership of their deliverables by virtually connecting innovative core competencies.\n\nProactively impacting virtually mission critical drivers is crucial to our immersive architecture. In the capability space, industry is reliably calibrating its long-term alignments. Key players will take ownership of their core competencies by ethically growing best-of-breed enterprises. Efficiencies will come from intelligently transforming our team players.\n\nIn the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?"
  },
  {
    "id": 994133,
    "name": "Value Added Immersive Analytics",
    "department": "Sales",
    "startedOn": "2009-05-11T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "beautifulleopard367",
      "whitemouse304"
    ],
    "description": "Proactively impacting virtually mission critical drivers is crucial to our immersive architecture. In the capability space, industry is reliably calibrating its long-term alignments. Key players will take ownership of their core competencies by ethically growing best-of-breed enterprises. Efficiencies will come from intelligently transforming our team players.\n\nEfficiencies will come from proactively growing our market foci. Going forward, our mobile paradigm shift will deliver value to big datas. Going forward, our immersive agile workflow will deliver value to enterprises. Key players will take ownership of their deliverables by virtually connecting innovative core competencies."
  },
  {
    "id": 480564,
    "name": "Mission Critical Efficient Offshoring Mobile App",
    "department": "Marketing",
    "startedOn": "2003-08-22T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "brownpeacock222",
     "goldenpeacock175",
     "purplepanda527",
     "ticklishgoose874",
     "silverwolf910",
     "smallostrich593",
     "bluepanda354",
      "silverrabbit923"
    ],
    "description": "In the future, will you be able to proactively align capabilities in your business? Change the way you do business - adopt best-in-class dot-bombs. In the future, will you be able to globally leverage enterprises in your business? Key players will take ownership of their core competencies by virtually connecting actionable siloes.\n\nKey players will take ownership of their dot-bombs by strategically reusing immersive capabilities. In the future, will you be able to effectively revolutionize step-changes in your business? In the future, will you be able to iteratively grow action points in your business? We aim to proactively strategize our big data by intelligently investing our holistic actionable bandwidths.\n\nChange the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches.\n\nIn the big data space, industry is iteratively synergising its end-to-end executive searches. Key players will take ownership of their low hanging fruit by reliably monetizing proactive user experiences. So we can hit the ground running, we will be virtually incentivizing every organic growth in our space. In the dot-bomb space, industry is dynamically transforming its holistic milestones."
  },
  {
    "id": 721835,
    "name": "Long Term Cloud Platform",
    "department": "Accounting",
    "startedOn": "2003-05-20T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "orangegorilla363",
     "crazypanda274",
     "bigmouse194",
     "tinyduck628",
     "lazypeacock969",
     "ticklishpanda298",
     "whitecat119",
     "yellowcat935",
      "bluepanda840"
    ],
    "description": "In the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space."
  },
  {
    "id": 988456,
    "name": "Long Term Cloud Strategic Analytics",
    "department": "Accounting",
    "startedOn": "2002-03-16T06:00:00.000Z",
    "endedOn": "2015-06-13T05:00:00.000Z",
    "assigned": [
     "lazyrabbit169",
     "lazypanda966",
      "orangefrog731"
    ],
    "description": "In the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?\n\nIn the big data space, industry is iteratively synergising its end-to-end executive searches. Key players will take ownership of their low hanging fruit by reliably monetizing proactive user experiences. So we can hit the ground running, we will be virtually incentivizing every organic growth in our space. In the dot-bomb space, industry is dynamically transforming its holistic milestones.\n\nSo we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables.\n\nOur business revolutionizes low hanging fruit to strategically and dynamically integrate our competitive alignment. Intelligently leveraging reliably customer-focused drivers is crucial to our best-in-class executive search. Our business impacts visibilities to ethically and globally virtualise our seamless best practice. We aim to strategically align our capability by proactively offshoring our proactive value-added game changers."
  },
  {
    "id": 214877,
    "name": "Client/Server Global Holistic Mobile App",
    "department": "Marketing",
    "startedOn": "2010-08-26T05:00:00.000Z",
    "endedOn": "2014-12-20T06:00:00.000Z",
    "assigned": [
     "blackrabbit3",
     "crazyduck410",
     "goldenpeacock175",
     "bluepanda354",
     "silverwolf910",
     "ticklishgoose874",
     "brownpeacock222",
      "silverrabbit923"
    ],
    "description": "Iteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths.\n\nIn the future, will you be able to proactively align capabilities in your business? Change the way you do business - adopt best-in-class dot-bombs. In the future, will you be able to globally leverage enterprises in your business? Key players will take ownership of their core competencies by virtually connecting actionable siloes."
  },
  {
    "id": 615398,
    "name": "Next Gen Integrated Mobile App",
    "department": "Sales",
    "startedOn": "2002-03-16T06:00:00.000Z",
    "endedOn": "2015-11-07T06:00:00.000Z",
    "assigned": [
     "crazyladybug288",
     "brownmouse229",
     "blackpanda237",
     "heavywolf437",
     "yellowbird271",
     "bluetiger546",
     "yellowtiger366",
     "bluemeercat66",
     "smallwolf576",
     "silvermouse687",
     "crazyostrich528",
     "yellowladybug535",
      "orangeelephant668"
    ],
    "description": "Effectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 123759,
    "name": "Cross Platform Streamlined Mobile Platform",
    "department": "Sales",
    "startedOn": "1989-12-13T06:00:00.000Z",
    "endedOn": "2014-12-08T06:00:00.000Z",
    "assigned": [
     "blackpanda237",
     "ticklishbutterfly1",
      "purplewolf498"
    ],
    "description": "In the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?"
  },
  {
    "id": 2048510,
    "name": "Next Gen Logistical Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "2008-01-04T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "redrabbit642",
     "whitekoala138",
     "blackelephant246",
     "greenleopard467",
     "ticklishgorilla951",
     "bigelephant907",
     "tinymouse298",
     "smallfrog632",
      "greenwolf347"
    ],
    "description": "Effectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables.\n\nSo we can hit the ground running, we will be dynamically reusing every team player in our space. Going forward, our competitive paradigm shift will deliver value to innovations. Change the way you do business - adopt proactive drivers. Key players will take ownership of their alignments by virtually monetizing customer-focused core competencies."
  },
  {
    "id": 7504111,
    "name": "Long-Tail Virtual Actionable Mobile Platform",
    "department": "Human Resources",
    "startedOn": "1992-05-16T05:00:00.000Z",
    "endedOn": "2014-10-26T05:00:00.000Z",
    "assigned": [
     "lazymeercat712",
     "whitecat698",
     "blackpeacock213",
     "smallfrog632",
     "whitekoala138",
      "orangebird478"
    ],
    "description": "In the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift.\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs."
  },
  {
    "id": 4308312,
    "name": "Long Term Monetized Streamlined Analytics",
    "department": "Accounting",
    "startedOn": "2002-05-03T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "tinyduck628",
     "redtiger449",
     "biggoose954",
     "ticklishpanda298",
     "beautifulcat2",
     "blackbird181",
     "yellowpanda940",
      "goldenbird725"
    ],
    "description": "In the big data space, industry is iteratively synergising its end-to-end executive searches. Key players will take ownership of their low hanging fruit by reliably monetizing proactive user experiences. So we can hit the ground running, we will be virtually incentivizing every organic growth in our space. In the dot-bomb space, industry is dynamically transforming its holistic milestones.\n\nIn the stakeholder space, industry is effectively virtualising its customer-focused best practices. We aim to dynamically synergise our enterprise by intelligently reusing our value-added mobile ballpark figures. We aim to ethically revolutionize our capability by virtually monetizing our seamless proactive visibilities. In the future, will you be able to globally incentivize synergies in your business?\n\nGoing forward, our end-to-end market focus will deliver value to standpoints. Efficiencies will come from globally calibrating our capabilities. We aim to reliably offshore our alignment by ethically growing our best-in-class seamless visibilities. Strategically transforming reliably holistic innovations is crucial to our mission critical prince2 practitioner.\n\nIn the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?"
  },
  {
    "id": 4833113,
    "name": "Short Term Streamlined Social Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2004-11-28T06:00:00.000Z",
    "endedOn": "2015-05-02T05:00:00.000Z",
    "assigned": [
     "whitecat119",
     "orangefrog731",
     "yellowcat935",
     "goldenbird725",
     "beautifulcat2",
      "crazypanda274"
    ],
    "description": "Change the way you do business - adopt proactive prince2 practitioners. Efficiencies will come from strategically integrating our agile workflows. Key players will take ownership of their platforms by dynamically deep-diving best-in-class propositions. Change the way you do business - adopt innovative siloes.\n\nSo we can hit the ground running, we will be globally investing every capability in our space. Efficiencies will come from intelligently synergising our agile workflows. In the future, will you be able to ethically impact visibilities in your business? So we can hit the ground running, we will be effectively connecting every stand-up in our space."
  },
  {
    "id": 1356314,
    "name": "Value Added Social Analytics",
    "department": "Accounting",
    "startedOn": "2008-06-04T05:00:00.000Z",
    "endedOn": "2015-12-18T06:00:00.000Z",
    "assigned": [
     "lazypanda966",
     "crazypanda274",
     "greengoose892",
     "tinyduck628",
     "yellowcat935",
     "redtiger449",
     "bluepanda840",
     "blackbird181",
      "ticklishpanda298"
    ],
    "description": "In the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space.\n\nSo we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space.\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 9067515,
    "name": "Long-Tail Innovative Mobile Platform",
    "department": "Marketing",
    "startedOn": "2008-09-09T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "purplepanda527",
      "silverwolf910"
    ],
    "description": "Going forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?"
  },
  {
    "id": 6959116,
    "name": "Short Term Outsourcing Integrated Mobile Initiative",
    "department": "Sales",
    "startedOn": "2009-07-21T05:00:00.000Z",
    "endedOn": "2013-06-17T05:00:00.000Z",
    "assigned": [
     "smallwolf576",
      "bluemeercat298"
    ],
    "description": "In the future, will you be able to strategically incentivize action points in your business? Iteratively connecting reliably end-to-end best practices is crucial to our seamless brand. In the stakeholder space, industry is effectively leveraging its mobile stacks. In the user experience space, industry is dynamically relaying its customer-focused bandwidths.\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nIn the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds.\n\nKey players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?"
  },
  {
    "id": 4344517,
    "name": "Touch Enabled Holistic Mobile Platform",
    "department": "Sales",
    "startedOn": "2002-02-16T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greenswan929",
     "whitebutterfly382",
     "redladybug440",
     "tinysnake517",
     "goldenkoala942",
      "redwolf207"
    ],
    "description": "In the future, will you be able to proactively align big datas in your business? Key players will take ownership of their game changers by ethically impacting mobile emerging markets. Going forward, our seamless stand-up will deliver value to milestones. We aim to globally leverage our executive search by intelligently incentivizing our actionable innovative enterprises."
  },
  {
    "id": 2533718,
    "name": "Client/Server Synergistic Mobile App",
    "department": "Sales",
    "startedOn": "2002-03-04T06:00:00.000Z",
    "endedOn": "2014-10-20T05:00:00.000Z",
    "assigned": [
     "bluemeercat298",
     "yellowleopard565",
     "silvermouse687",
     "crazygorilla336",
     "greenostrich439",
     "ticklishbird555",
      "smallwolf576"
    ],
    "description": "So we can hit the ground running, we will be dynamically reusing every team player in our space. Going forward, our competitive paradigm shift will deliver value to innovations. Change the way you do business - adopt proactive drivers. Key players will take ownership of their alignments by virtually monetizing customer-focused core competencies.\n\nIn the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space.\n\nIteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths.\n\nIn the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds."
  },
  {
    "id": 5017919,
    "name": "Long Term Dynamic Analytics",
    "department": "Marketing",
    "startedOn": "2006-12-26T06:00:00.000Z",
    "endedOn": "2014-03-07T06:00:00.000Z",
    "assigned": [
     "jdoe",
     "blackrabbit3",
     "brownpeacock222",
     "heavyladybug740",
     "ticklishgoose874",
     "silverrabbit923",
     "crazyduck410",
     "yellowwolf751",
      "bluepanda354"
    ],
    "description": "In the future, will you be able to strategically incentivize action points in your business? Iteratively connecting reliably end-to-end best practices is crucial to our seamless brand. In the stakeholder space, industry is effectively leveraging its mobile stacks. In the user experience space, industry is dynamically relaying its customer-focused bandwidths.\n\nKey players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nIn the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space."
  },
  {
    "id": 8096220,
    "name": "Next Gen Integrated Mobile Initiative",
    "department": "Marketing",
    "startedOn": "1996-02-12T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "blackrabbit3",
     "jdoe",
      "ticklishgoose874"
    ],
    "description": "In the stakeholder space, industry is effectively virtualising its customer-focused best practices. We aim to dynamically synergise our enterprise by intelligently reusing our value-added mobile ballpark figures. We aim to ethically revolutionize our capability by virtually monetizing our seamless proactive visibilities. In the future, will you be able to globally incentivize synergies in your business?\n\nChange the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches."
  },
  {
    "id": 8908721,
    "name": "Long Term Key Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2004-09-28T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "beautifulcat2",
     "bigmouse194",
      "tinyduck628"
    ],
    "description": "Effectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 3954422,
    "name": "Next Gen Monetized System",
    "department": "Human Resources",
    "startedOn": "1994-02-25T06:00:00.000Z",
    "endedOn": "2013-05-15T05:00:00.000Z",
    "assigned": [
     "whitecat698",
     "goldenfrog222",
     "blackelephant246",
      "orangebird478"
    ],
    "description": "In the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?"
  },
  {
    "id": 4656823,
    "name": "Long Term Holistic Virtual Mobile Platform",
    "department": "Marketing",
    "startedOn": "2010-05-16T05:00:00.000Z",
    "endedOn": "2014-07-02T05:00:00.000Z",
    "assigned": [
     "brownpeacock222",
     "ticklishgoose874",
     "silverrabbit923",
     "yellowwolf751",
     "purplepanda527",
     "silverwolf910",
      "whitekoala266"
    ],
    "description": "Efficiencies will come from dynamically growing our deliverables. Key players will take ownership of their action points by intelligently strategizing immersive step-changes. Change the way you do business - adopt mobile enterprises. Going forward, our value-added stakeholder will deliver value to paradigm shifts."
  },
  {
    "id": 6192024,
    "name": "Mission Critical Stakeholder Strategic Platform",
    "department": "Marketing",
    "startedOn": "2006-05-06T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "silverwolf910",
     "ticklishgoose874",
     "jdoe",
      "blackrabbit3"
    ],
    "description": "So we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space.\n\nEfficiencies will come from proactively growing our market foci. Going forward, our mobile paradigm shift will deliver value to big datas. Going forward, our immersive agile workflow will deliver value to enterprises. Key players will take ownership of their deliverables by virtually connecting innovative core competencies.\n\nIteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths.\n\nIn the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift."
  },
  {
    "id": 9691925,
    "name": "End To End CMS Virtual Mobile Initiative",
    "department": "Marketing",
    "startedOn": "2004-09-09T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitekoala266",
     "silverwolf910",
     "jdoe",
     "crazyduck410",
     "goldenpeacock175",
      "brownpeacock222"
    ],
    "description": "Going forward, our actionable stack will deliver value to drivers. Our business integrates game changers to strategically and proactively calibrate our innovative capability. Efficiencies will come from effectively virtualising our clouds. Key players will take ownership of their siloes by strategically offshoring best-of-breed innovations.\n\nWe aim to dynamically invest our low hanging fruit by intelligently impacting our mobile competitive standpoints. In the dot-bomb space, industry is iteratively revolutionizing its actionable stand-ups. Efficiencies will come from globally investing our ballpark figures. We aim to ethically offshore our game changer by intelligently strategizing our holistic value-added synergies.\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?"
  },
  {
    "id": 8501426,
    "name": "Cross Platform Streamlined Dynamic Initiative",
    "department": "Human Resources",
    "startedOn": "1998-03-09T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "tinymouse298",
     "whitekoala138",
     "blackelephant246",
     "greenleopard467",
     "smallfrog632",
     "goldenbutterfly797",
     "whitecat698",
     "bigelephant907",
     "goldenfrog222",
      "orangebird478"
    ],
    "description": "So we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables."
  },
  {
    "id": 2022927,
    "name": "Long Term CMS Proactive Initiative",
    "department": "Marketing",
    "startedOn": "2008-02-16T06:00:00.000Z",
    "endedOn": "2014-01-19T06:00:00.000Z",
    "assigned": [
     "smallostrich593",
     "goldenpeacock175",
      "silverwolf910"
    ],
    "description": "Intelligently deep-diving ethically best-of-breed bandwidths is crucial to our mission critical platform. So we can hit the ground running, we will be globally reusing every ballpark figure in our space. Effectively transforming iteratively actionable prince2 practitioners is crucial to our long-term standpoint. Efficiencies will come from reliably investing our stacks.\n\nIn the big data space, industry is iteratively synergising its end-to-end executive searches. Key players will take ownership of their low hanging fruit by reliably monetizing proactive user experiences. So we can hit the ground running, we will be virtually incentivizing every organic growth in our space. In the dot-bomb space, industry is dynamically transforming its holistic milestones.\n\nIn the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?"
  },
  {
    "id": 8753428,
    "name": "Cross Platform Stakeholder Immersive Analytics",
    "department": "Accounting",
    "startedOn": "2008-02-20T06:00:00.000Z",
    "endedOn": "2015-07-08T05:00:00.000Z",
    "assigned": [
     "silversnake507",
     "whitecat119",
     "bluepanda840",
     "lazyrabbit169",
      "goldenbird725"
    ],
    "description": "We aim to effectively relay our bandwidth by strategically revolutionizing our immersive actionable milestones. Going forward, our best-in-class platform will deliver value to siloes. Intelligently growing globally competitive best practices is crucial to our holistic synergy. Going forward, our mission critical architecture will deliver value to market foci."
  },
  {
    "id": 5853429,
    "name": "Client/Server Logistical Virtual Analytics",
    "department": "Sales",
    "startedOn": "2010-08-02T05:00:00.000Z",
    "endedOn": "2014-03-06T06:00:00.000Z",
    "assigned": [
     "crazygorilla336",
     "yellowladybug535",
     "greenostrich439",
     "heavysnake634",
     "smallelephant887",
     "bluetiger546",
      "silvermouse687"
    ],
    "description": "Going forward, our best-of-breed visibility will deliver value to clouds. Globally aligning proactively mobile innovations is crucial to our holistic enterprise. So we can hit the ground running, we will be strategically revolutionizing every organic growth in our space. Going forward, our immersive synergy will deliver value to action points."
  },
  {
    "id": 1321530,
    "name": "Client/Server Offshoring Virtual Mobile App",
    "department": "Accounting",
    "startedOn": "2010-09-09T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greenpeacock556",
     "orangefrog731",
     "lazypeacock969",
     "silversnake507",
     "tinyduck628",
     "greengoose892",
     "purplemeercat491",
     "greenfish196",
     "goldenbird725",
      "ticklishpanda298"
    ],
    "description": "Key players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs.\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 6441631,
    "name": "Client/Server Social Stakeholder Mobile Initiative",
    "department": "Marketing",
    "startedOn": "2000-06-07T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "silverrabbit923",
     "purplepanda527",
     "heavyladybug740",
      "ticklishgoose874"
    ],
    "description": "In the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift.\n\nKey players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?"
  },
  {
    "id": 2182232,
    "name": "Short Term Monetized Mobile App",
    "department": "Marketing",
    "startedOn": "2005-03-17T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitekoala266",
     "brownpeacock222",
     "heavyladybug740",
     "silverrabbit923",
     "crazyduck410",
      "ticklishgoose874"
    ],
    "description": "In the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift.\n\nGoing forward, our proactive low hanging fruit will deliver value to market foci. Key players will take ownership of their team players by proactively synergising best-of-breed step-changes. In the future, will you be able to virtually leverage visibilities in your business? Change the way you do business - adopt holistic ballpark figures."
  },
  {
    "id": 5526933,
    "name": "Touch Enabled Cloud Actionable Mobile Platform",
    "department": "Accounting",
    "startedOn": "2002-02-26T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greengoose892",
     "yellowcat935",
     "biggoose954",
     "lazyrabbit169",
     "greenfish196",
     "whitecat119",
     "beautifulcat2",
     "crazypanda274",
     "tinyduck628",
     "orangefrog731",
     "ticklishpanda298",
      "orangegorilla363"
    ],
    "description": "Effectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nProactively impacting virtually mission critical drivers is crucial to our immersive architecture. In the capability space, industry is reliably calibrating its long-term alignments. Key players will take ownership of their core competencies by ethically growing best-of-breed enterprises. Efficiencies will come from intelligently transforming our team players."
  },
  {
    "id": 4143134,
    "name": "Touch Enabled Social Platform",
    "department": "Human Resources",
    "startedOn": "2009-03-09T05:00:00.000Z",
    "endedOn": "2014-05-01T05:00:00.000Z",
    "assigned": [
     "goldenbutterfly797",
     "redrabbit642",
     "greenwolf347",
     "goldenfrog222",
     "greenleopard467",
     "tinyduck113",
     "whitetiger788",
     "whitekoala138",
     "orangebird478",
     "lazymeercat712",
     "ticklishgorilla951",
      "whitepeacock532"
    ],
    "description": "Going forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?"
  },
  {
    "id": 2636335,
    "name": "Client/Server Logistical Mobile Platform",
    "department": "Marketing",
    "startedOn": "2010-07-04T05:00:00.000Z",
    "endedOn": "2014-03-12T05:00:00.000Z",
    "assigned": [
     "blackrabbit3",
     "yellowwolf751",
     "smallostrich593",
     "brownpeacock222",
      "ticklishgoose874"
    ],
    "description": "Iteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths."
  },
  {
    "id": 7411336,
    "name": "Mission Critical Monetized Social Platform",
    "department": "Accounting",
    "startedOn": "1999-04-12T05:00:00.000Z",
    "endedOn": "2014-02-09T06:00:00.000Z",
    "assigned": [
     "lazypanda966",
     "whitecat119",
     "lazypeacock969",
     "redtiger449",
     "bigmouse194",
     "bluepanda840",
     "greenfish196",
     "ticklishpanda298",
     "blackbird181",
     "tinyduck628",
     "orangegorilla363",
      "yellowpanda940"
    ],
    "description": "Going forward, our competitive proposition will deliver value to emerging markets. Our business impacts emerging markets to reliably and dynamically reuse our mission critical big data. Efficiencies will come from globally strategizing our best practices. Going forward, our end-to-end bandwidth will deliver value to synergies.\n\nIn the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?\n\nIn the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds."
  },
  {
    "id": 7773437,
    "name": "Next Gen Synergistic Analytics",
    "department": "Marketing",
    "startedOn": "2006-01-01T06:00:00.000Z",
    "endedOn": "2014-11-09T06:00:00.000Z",
    "assigned": [
     "yellowwolf751",
     "whitekoala266",
     "ticklishgoose874",
     "smallostrich593",
     "goldenpeacock175",
     "silverwolf910",
     "crazyduck410",
     "silverrabbit923",
      "heavyladybug740"
    ],
    "description": "Change the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches.\n\nEffectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nIn the stakeholder space, industry is effectively virtualising its customer-focused best practices. We aim to dynamically synergise our enterprise by intelligently reusing our value-added mobile ballpark figures. We aim to ethically revolutionize our capability by virtually monetizing our seamless proactive visibilities. In the future, will you be able to globally incentivize synergies in your business?"
  },
  {
    "id": 9786238,
    "name": "Cross Platform CMS ROI Analytics",
    "department": "Sales",
    "startedOn": "2008-08-12T05:00:00.000Z",
    "endedOn": "2015-10-28T05:00:00.000Z",
    "assigned": [
     "crazygorilla336",
     "heavysnake634",
     "greenostrich439",
     "orangeelephant668",
     "yellowleopard565",
     "ticklishbear822",
     "blackpanda397",
     "bluetiger546",
     "yellowbird271",
      "silverbird464"
    ],
    "description": "In the big data space, industry is iteratively synergising its end-to-end executive searches. Key players will take ownership of their low hanging fruit by reliably monetizing proactive user experiences. So we can hit the ground running, we will be virtually incentivizing every organic growth in our space. In the dot-bomb space, industry is dynamically transforming its holistic milestones.\n\nWe aim to effectively relay our bandwidth by strategically revolutionizing our immersive actionable milestones. Going forward, our best-in-class platform will deliver value to siloes. Intelligently growing globally competitive best practices is crucial to our holistic synergy. Going forward, our mission critical architecture will deliver value to market foci."
  },
  {
    "id": 4500639,
    "name": "Next Gen Immersive Mobile Initiative",
    "department": "Marketing",
    "startedOn": "2009-04-28T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "jdoe",
     "yellowwolf751",
     "smallostrich593",
     "goldenpeacock175",
      "crazyduck410"
    ],
    "description": "So we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables.\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nSo we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space."
  },
  {
    "id": 7970540,
    "name": "Client/Server B2B Virtual Platform",
    "department": "Sales",
    "startedOn": "1989-02-02T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "blackdog47",
     "tinysnake517",
     "tinykoala298",
     "ticklishbird555",
     "bluerabbit187",
     "goldenkoala942",
     "purplewolf498",
     "blackpanda397",
     "bluetiger546",
     "whitebutterfly382",
     "ticklishdog505",
      "yellowdog110"
    ],
    "description": "Going forward, our best-of-breed visibility will deliver value to clouds. Globally aligning proactively mobile innovations is crucial to our holistic enterprise. So we can hit the ground running, we will be strategically revolutionizing every organic growth in our space. Going forward, our immersive synergy will deliver value to action points."
  },
  {
    "id": 7563141,
    "name": "Effective B2B Mobile App",
    "department": "Human Resources",
    "startedOn": "2010-10-26T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitecat698",
     "orangebird478",
     "goldenfrog222",
     "ticklishgorilla951",
     "greenleopard467",
     "bigelephant907",
     "whitekoala138",
     "smallfrog632",
     "whitetiger788",
     "lazymeercat712",
      "blackpeacock213"
    ],
    "description": "Going forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nGoing forward, our actionable stack will deliver value to drivers. Our business integrates game changers to strategically and proactively calibrate our innovative capability. Efficiencies will come from effectively virtualising our clouds. Key players will take ownership of their siloes by strategically offshoring best-of-breed innovations.\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs.\n\nIn the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?"
  },
  {
    "id": 2202642,
    "name": "Long Term Outsourcing Analytics",
    "department": "Sales",
    "startedOn": "2003-02-11T06:00:00.000Z",
    "endedOn": "2014-08-11T05:00:00.000Z",
    "assigned": [
     "heavywolf437",
     "silverbird464",
     "redwolf207",
     "crazyostrich528",
     "redladybug440",
     "ticklishbird555",
     "orangeostrich499",
      "bluemeercat298"
    ],
    "description": "Going forward, our competitive proposition will deliver value to emerging markets. Our business impacts emerging markets to reliably and dynamically reuse our mission critical big data. Efficiencies will come from globally strategizing our best practices. Going forward, our end-to-end bandwidth will deliver value to synergies.\n\nSo we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables."
  },
  {
    "id": 3182543,
    "name": "Long-Tail Virtual Innovative Analytics",
    "department": "Human Resources",
    "startedOn": "2010-06-05T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greenleopard467",
      "yellowbird585"
    ],
    "description": "In the future, will you be able to strategically incentivize action points in your business? Iteratively connecting reliably end-to-end best practices is crucial to our seamless brand. In the stakeholder space, industry is effectively leveraging its mobile stacks. In the user experience space, industry is dynamically relaying its customer-focused bandwidths.\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 9688144,
    "name": "Win-Win Logistical Platform",
    "department": "Sales",
    "startedOn": "2001-11-13T06:00:00.000Z",
    "endedOn": "2014-04-10T05:00:00.000Z",
    "assigned": [
     "greenostrich439",
     "bluemeercat66",
     "heavysnake634",
     "ticklishlion619",
     "orangeostrich499",
     "ticklishbutterfly1",
     "bluerabbit187",
     "smallwolf576",
     "ticklishdog505",
     "ticklishbear822",
     "greenswan929",
     "silverbird464",
     "yellowtiger366",
      "tinysnake517"
    ],
    "description": "Going forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables.\n\nOur business leverages team players to ethically and proactively connect our customer-focused brand. Intelligently revolutionizing globally best-in-class best practices is crucial to our seamless agile workflow. In the future, will you be able to strategically align stand-ups in your business? Going forward, our seamless bandwidth will deliver value to alignments.\n\nSo we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space."
  },
  {
    "id": 9768045,
    "name": "Customer Focused Holistic Platform",
    "department": "Sales",
    "startedOn": "2008-05-16T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "crazygorilla336",
     "orangeelephant668",
      "ticklishbird555"
    ],
    "description": "In the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs.\n\nGoing forward, our actionable stack will deliver value to drivers. Our business integrates game changers to strategically and proactively calibrate our innovative capability. Efficiencies will come from effectively virtualising our clouds. Key players will take ownership of their siloes by strategically offshoring best-of-breed innovations."
  },
  {
    "id": 9097846,
    "name": "Long Term Social Analytics",
    "department": "Human Resources",
    "startedOn": "1998-08-03T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitepeacock532",
     "tinyduck113",
     "yellowbird585",
     "tinymouse298",
     "blackelephant246",
     "whitetiger788",
     "goldenbutterfly797",
     "blackpeacock213",
      "redrabbit642"
    ],
    "description": "Key players will take ownership of their dot-bombs by strategically reusing immersive capabilities. In the future, will you be able to effectively revolutionize step-changes in your business? In the future, will you be able to iteratively grow action points in your business? We aim to proactively strategize our big data by intelligently investing our holistic actionable bandwidths.\n\nIn the future, will you be able to proactively align capabilities in your business? Change the way you do business - adopt best-in-class dot-bombs. In the future, will you be able to globally leverage enterprises in your business? Key players will take ownership of their core competencies by virtually connecting actionable siloes.\n\nChange the way you do business - adopt proactive prince2 practitioners. Efficiencies will come from strategically integrating our agile workflows. Key players will take ownership of their platforms by dynamically deep-diving best-in-class propositions. Change the way you do business - adopt innovative siloes."
  },
  {
    "id": 8322047,
    "name": "Customer Focused Cloud Immersive Mobile Platform",
    "department": "Human Resources",
    "startedOn": "1988-03-18T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitetiger788",
     "tinyduck113",
     "ticklishgorilla951",
     "greenwolf347",
     "whitecat698",
     "yellowbird585",
     "tinymouse298",
      "orangebird478"
    ],
    "description": "Change the way you do business - adopt customer-focused clouds. Going forward, our end-to-end proposition will deliver value to team players. In the future, will you be able to effectively calibrate stand-ups in your business? Change the way you do business - adopt holistic innovations.\n\nSo we can hit the ground running, we will be globally investing every capability in our space. Efficiencies will come from intelligently synergising our agile workflows. In the future, will you be able to ethically impact visibilities in your business? So we can hit the ground running, we will be effectively connecting every stand-up in our space."
  },
  {
    "id": 5731548,
    "name": "Short Term Integrated Cloud System",
    "department": "Accounting",
    "startedOn": "2006-05-21T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "biggoose954",
     "bluepanda840",
     "lazypeacock969",
     "greengoose892",
     "greenpeacock556",
     "ticklishpanda298",
     "yellowcat935",
     "beautifulcat2",
     "silversnake507",
     "goldenbird725",
     "whitecat119",
     "yellowpanda940",
      "purplemeercat491"
    ],
    "description": "In the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space.\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nIn the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds."
  },
  {
    "id": 8226549,
    "name": "Customer Focused Integrated System",
    "department": "Human Resources",
    "startedOn": "2005-09-17T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "goldenbutterfly797",
      "whitetiger788"
    ],
    "description": "Change the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches.\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs.\n\nOur business revolutionizes low hanging fruit to strategically and dynamically integrate our competitive alignment. Intelligently leveraging reliably customer-focused drivers is crucial to our best-in-class executive search. Our business impacts visibilities to ethically and globally virtualise our seamless best practice. We aim to strategically align our capability by proactively offshoring our proactive value-added game changers."
  },
  {
    "id": 9439850,
    "name": "Long Term B2B Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "2003-04-12T05:00:00.000Z",
    "endedOn": "2014-02-28T06:00:00.000Z",
    "assigned": [
     "yellowbird585",
     "whitepeacock532",
     "whitecat698",
     "orangebird478",
     "redrabbit642",
     "ticklishgorilla951",
      "bigelephant907"
    ],
    "description": "Our business leverages team players to ethically and proactively connect our customer-focused brand. Intelligently revolutionizing globally best-in-class best practices is crucial to our seamless agile workflow. In the future, will you be able to strategically align stand-ups in your business? Going forward, our seamless bandwidth will deliver value to alignments."
  },
  {
    "id": 3982851,
    "name": "Short Term Global Mobile App",
    "department": "Sales",
    "startedOn": "1995-04-13T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "heavysnake634",
     "tinykoala298",
     "bluegorilla84",
     "whitebutterfly382",
     "goldenkoala942",
     "crazyostrich528",
     "orangeelephant668",
     "brownmouse229",
     "crazyladybug288",
     "yellowbird271",
     "greenostrich439",
     "ticklishbutterfly1",
      "yellowleopard565"
    ],
    "description": "So we can hit the ground running, we will be dynamically reusing every team player in our space. Going forward, our competitive paradigm shift will deliver value to innovations. Change the way you do business - adopt proactive drivers. Key players will take ownership of their alignments by virtually monetizing customer-focused core competencies.\n\nSo we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables.\n\nGoing forward, our end-to-end market focus will deliver value to standpoints. Efficiencies will come from globally calibrating our capabilities. We aim to reliably offshore our alignment by ethically growing our best-in-class seamless visibilities. Strategically transforming reliably holistic innovations is crucial to our mission critical prince2 practitioner."
  },
  {
    "id": 8096752,
    "name": "Customer Focused Integrated Actionable Analytics",
    "department": "Human Resources",
    "startedOn": "2010-08-15T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "goldenfrog222",
     "whitekoala138",
     "greenleopard467",
     "tinymouse298",
     "lazymeercat712",
     "blackpeacock213",
     "orangebird478",
     "whitetiger788",
      "yellowbird585"
    ],
    "description": "Going forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nEfficiencies will come from proactively growing our market foci. Going forward, our mobile paradigm shift will deliver value to big datas. Going forward, our immersive agile workflow will deliver value to enterprises. Key players will take ownership of their deliverables by virtually connecting innovative core competencies.\n\nGoing forward, our best-of-breed visibility will deliver value to clouds. Globally aligning proactively mobile innovations is crucial to our holistic enterprise. So we can hit the ground running, we will be strategically revolutionizing every organic growth in our space. Going forward, our immersive synergy will deliver value to action points."
  },
  {
    "id": 8368153,
    "name": "Customer Focused Monetized Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2011-05-25T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "blackbird181",
      "lazyrabbit169"
    ],
    "description": "In the future, will you be able to proactively align big datas in your business? Key players will take ownership of their game changers by ethically impacting mobile emerging markets. Going forward, our seamless stand-up will deliver value to milestones. We aim to globally leverage our executive search by intelligently incentivizing our actionable innovative enterprises.\n\nGoing forward, our end-to-end market focus will deliver value to standpoints. Efficiencies will come from globally calibrating our capabilities. We aim to reliably offshore our alignment by ethically growing our best-in-class seamless visibilities. Strategically transforming reliably holistic innovations is crucial to our mission critical prince2 practitioner.\n\nWe aim to effectively relay our bandwidth by strategically revolutionizing our immersive actionable milestones. Going forward, our best-in-class platform will deliver value to siloes. Intelligently growing globally competitive best practices is crucial to our holistic synergy. Going forward, our mission critical architecture will deliver value to market foci.\n\nChange the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches."
  },
  {
    "id": 7680654,
    "name": "Customer Focused Streamlined Mobile App",
    "department": "Accounting",
    "startedOn": "2007-12-24T06:00:00.000Z",
    "endedOn": "2015-06-03T05:00:00.000Z",
    "assigned": [
     "blackbird181",
     "bigmouse194",
     "yellowpanda940",
     "crazypanda274",
     "goldenbird725",
     "tinyduck628",
     "greenpeacock556",
     "orangefrog731",
     "ticklishpanda298",
      "redtiger449"
    ],
    "description": "So we can hit the ground running, we will be dynamically reusing every team player in our space. Going forward, our competitive paradigm shift will deliver value to innovations. Change the way you do business - adopt proactive drivers. Key players will take ownership of their alignments by virtually monetizing customer-focused core competencies."
  },
  {
    "id": 1773855,
    "name": "Touch Enabled Monetized Global System",
    "department": "Accounting",
    "startedOn": "2008-07-03T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "biggoose954",
     "greengoose892",
     "tinyduck628",
     "ticklishpanda298",
     "greenfish196",
     "lazypanda966",
      "whitecat119"
    ],
    "description": "Our business leverages team players to ethically and proactively connect our customer-focused brand. Intelligently revolutionizing globally best-in-class best practices is crucial to our seamless agile workflow. In the future, will you be able to strategically align stand-ups in your business? Going forward, our seamless bandwidth will deliver value to alignments."
  },
  {
    "id": 2483356,
    "name": "Client/Server Integrated Analytics",
    "department": "Sales",
    "startedOn": "2007-11-06T06:00:00.000Z",
    "endedOn": "2015-04-23T05:00:00.000Z",
    "assigned": [
     "ticklishlion619",
     "whitemouse304",
     "yellowdog110",
     "brownmouse229",
     "ticklishbutterfly1",
     "ticklishdog505",
     "yellowbird271",
     "bluemeercat298",
     "bluetiger546",
     "yellowladybug535",
     "crazyladybug288",
     "bluerabbit187",
      "crazyostrich528"
    ],
    "description": "In the stakeholder space, industry is effectively virtualising its customer-focused best practices. We aim to dynamically synergise our enterprise by intelligently reusing our value-added mobile ballpark figures. We aim to ethically revolutionize our capability by virtually monetizing our seamless proactive visibilities. In the future, will you be able to globally incentivize synergies in your business?\n\nIteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths."
  },
  {
    "id": 6724657,
    "name": "Mission Critical Cloud Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2003-12-13T06:00:00.000Z",
    "endedOn": "2015-05-08T05:00:00.000Z",
    "assigned": [
     "crazypanda274",
     "goldenbird725",
     "greenfish196",
     "whitecat119",
     "lazyrabbit169",
     "lazypeacock969",
     "redtiger449",
      "orangegorilla363"
    ],
    "description": "In the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?\n\nSo we can hit the ground running, we will be globally investing every capability in our space. Efficiencies will come from intelligently synergising our agile workflows. In the future, will you be able to ethically impact visibilities in your business? So we can hit the ground running, we will be effectively connecting every stand-up in our space.\n\nIn the future, will you be able to proactively align capabilities in your business? Change the way you do business - adopt best-in-class dot-bombs. In the future, will you be able to globally leverage enterprises in your business? Key players will take ownership of their core competencies by virtually connecting actionable siloes.\n\nIn the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift."
  },
  {
    "id": 4018758,
    "name": "Big Data Strategic Outsourcing Mobile Platform",
    "department": "Human Resources",
    "startedOn": "2006-01-26T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "blackelephant246",
     "blackpeacock213",
     "whitetiger788",
     "yellowbird585",
     "tinymouse298",
      "goldenbutterfly797"
    ],
    "description": "Iteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths."
  },
  {
    "id": 3601259,
    "name": "Touch Enabled CMS Innovative Initiative",
    "department": "Human Resources",
    "startedOn": "2007-07-22T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "lazymeercat712",
     "bigelephant907",
     "smallfrog632",
     "greenwolf347",
     "goldenbutterfly797",
     "goldenfrog222",
     "orangebird478",
     "whitecat698",
     "redrabbit642",
     "tinymouse298",
      "whitepeacock532"
    ],
    "description": "Iteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths.\n\nChange the way you do business - adopt customer-focused clouds. Going forward, our end-to-end proposition will deliver value to team players. In the future, will you be able to effectively calibrate stand-ups in your business? Change the way you do business - adopt holistic innovations.\n\nSo we can hit the ground running, we will be dynamically reusing every team player in our space. Going forward, our competitive paradigm shift will deliver value to innovations. Change the way you do business - adopt proactive drivers. Key players will take ownership of their alignments by virtually monetizing customer-focused core competencies.\n\nIn the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?"
  },
  {
    "id": 8207360,
    "name": "Mission Critical Integrated Streamlined Mobile Platform",
    "department": "Accounting",
    "startedOn": "2009-11-20T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "biggoose954",
     "greenfish196",
     "greenpeacock556",
     "bluepanda840",
      "redtiger449"
    ],
    "description": "In the future, will you be able to proactively align big datas in your business? Key players will take ownership of their game changers by ethically impacting mobile emerging markets. Going forward, our seamless stand-up will deliver value to milestones. We aim to globally leverage our executive search by intelligently incentivizing our actionable innovative enterprises.\n\nKey players will take ownership of their dot-bombs by strategically reusing immersive capabilities. In the future, will you be able to effectively revolutionize step-changes in your business? In the future, will you be able to iteratively grow action points in your business? We aim to proactively strategize our big data by intelligently investing our holistic actionable bandwidths."
  },
  {
    "id": 2975461,
    "name": "Value Added Actionable Outsourcing Initiative",
    "department": "Sales",
    "startedOn": "2003-08-07T05:00:00.000Z",
    "endedOn": "2013-12-02T06:00:00.000Z",
    "assigned": [
     "heavysnake634",
     "yellowleopard565",
     "redbutterfly240",
     "bluegorilla84",
     "purplewolf498",
     "greenswan929",
      "ticklishlion619"
    ],
    "description": "Efficiencies will come from dynamically growing our deliverables. Key players will take ownership of their action points by intelligently strategizing immersive step-changes. Change the way you do business - adopt mobile enterprises. Going forward, our value-added stakeholder will deliver value to paradigm shifts.\n\nIn the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space."
  },
  {
    "id": 1988262,
    "name": "Next Gen Key Holistic Mobile Platform",
    "department": "Marketing",
    "startedOn": "2010-04-10T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "purplepanda527",
      "yellowwolf751"
    ],
    "description": "Change the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches."
  },
  {
    "id": 7799763,
    "name": "Long Term CMS Global Initiative",
    "department": "Accounting",
    "startedOn": "2010-06-16T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "lazypeacock969",
     "goldenbird725",
     "bigmouse194",
     "yellowcat935",
     "crazypanda274",
      "purplemeercat491"
    ],
    "description": "Going forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?\n\nSo we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space."
  },
  {
    "id": 8433364,
    "name": "Long-Tail Holistic B2B Mobile App",
    "department": "Human Resources",
    "startedOn": "2009-11-02T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitepeacock532",
     "goldenbutterfly797",
     "orangebird478",
     "smallfrog632",
     "yellowbird585",
      "tinyduck113"
    ],
    "description": "Effectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nSo we can hit the ground running, we will be globally investing every capability in our space. Efficiencies will come from intelligently synergising our agile workflows. In the future, will you be able to ethically impact visibilities in your business? So we can hit the ground running, we will be effectively connecting every stand-up in our space.\n\nIn the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift.\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?"
  },
  {
    "id": 8683665,
    "name": "Next Gen Holistic Initiative",
    "department": "Marketing",
    "startedOn": "2008-07-13T05:00:00.000Z",
    "endedOn": "2014-01-26T06:00:00.000Z",
    "assigned": [
     "bluepanda354",
     "brownpeacock222",
     "whitekoala266",
     "silverwolf910",
      "purplepanda527"
    ],
    "description": "Change the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches.\n\nIteratively investing proactively mission critical core assets is crucial to our end-to-end stand-up. Change the way you do business - adopt competitive architectures. Strategically integrating reliably immersive capabilities is crucial to our end-to-end user experience. Change the way you do business - adopt actionable organic growths.\n\nSo we can hit the ground running, we will be dynamically reusing every team player in our space. Going forward, our competitive paradigm shift will deliver value to innovations. Change the way you do business - adopt proactive drivers. Key players will take ownership of their alignments by virtually monetizing customer-focused core competencies."
  },
  {
    "id": 1243866,
    "name": "Win-Win Synergistic Platform",
    "department": "Marketing",
    "startedOn": "2005-03-01T06:00:00.000Z",
    "endedOn": "2014-06-17T05:00:00.000Z",
    "assigned": [
     "yellowwolf751",
     "purplepanda527",
     "jdoe",
      "heavyladybug740"
    ],
    "description": "Intelligently deep-diving ethically best-of-breed bandwidths is crucial to our mission critical platform. So we can hit the ground running, we will be globally reusing every ballpark figure in our space. Effectively transforming iteratively actionable prince2 practitioners is crucial to our long-term standpoint. Efficiencies will come from reliably investing our stacks.\n\nGoing forward, our best-of-breed visibility will deliver value to clouds. Globally aligning proactively mobile innovations is crucial to our holistic enterprise. So we can hit the ground running, we will be strategically revolutionizing every organic growth in our space. Going forward, our immersive synergy will deliver value to action points.\n\nIn the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?"
  },
  {
    "id": 7539867,
    "name": "Client/Server Innovative Stakeholder System",
    "department": "Human Resources",
    "startedOn": "1999-11-13T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "smallfrog632",
     "orangebird478",
     "whitecat698",
      "bigelephant907"
    ],
    "description": "In the future, will you be able to strategically incentivize action points in your business? Iteratively connecting reliably end-to-end best practices is crucial to our seamless brand. In the stakeholder space, industry is effectively leveraging its mobile stacks. In the user experience space, industry is dynamically relaying its customer-focused bandwidths."
  },
  {
    "id": 3994268,
    "name": "Customer Focused Efficient Strategic Analytics",
    "department": "Accounting",
    "startedOn": "2007-11-25T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greenpeacock556",
     "lazypeacock969",
     "bluepanda840",
     "whitecat119",
      "lazyrabbit169"
    ],
    "description": "Key players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nIn the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds."
  },
  {
    "id": 7754069,
    "name": "Value Added B2B ROI Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "2003-07-26T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "orangebird478",
     "lazymeercat712",
     "whitekoala138",
     "blackelephant246",
     "tinyduck113",
     "goldenfrog222",
     "whitetiger788",
      "whitecat698"
    ],
    "description": "In the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs.\n\nKey players will take ownership of their dot-bombs by strategically reusing immersive capabilities. In the future, will you be able to effectively revolutionize step-changes in your business? In the future, will you be able to iteratively grow action points in your business? We aim to proactively strategize our big data by intelligently investing our holistic actionable bandwidths.\n\nIntelligently deep-diving ethically best-of-breed bandwidths is crucial to our mission critical platform. So we can hit the ground running, we will be globally reusing every ballpark figure in our space. Effectively transforming iteratively actionable prince2 practitioners is crucial to our long-term standpoint. Efficiencies will come from reliably investing our stacks."
  },
  {
    "id": 1754670,
    "name": "End To End Actionable Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "1997-06-28T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "goldenfrog222",
     "bigelephant907",
     "whitekoala138",
     "greenwolf347",
     "whitecat698",
     "yellowbird585",
      "goldenbutterfly797"
    ],
    "description": "In the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?\n\nGoing forward, our competitive proposition will deliver value to emerging markets. Our business impacts emerging markets to reliably and dynamically reuse our mission critical big data. Efficiencies will come from globally strategizing our best practices. Going forward, our end-to-end bandwidth will deliver value to synergies."
  },
  {
    "id": 9828871,
    "name": "Long Term Immersive Mobile Platform",
    "department": "Human Resources",
    "startedOn": "2003-04-22T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitecat698",
     "redrabbit642",
      "yellowbird585"
    ],
    "description": "Going forward, our best-of-breed visibility will deliver value to clouds. Globally aligning proactively mobile innovations is crucial to our holistic enterprise. So we can hit the ground running, we will be strategically revolutionizing every organic growth in our space. Going forward, our immersive synergy will deliver value to action points.\n\nIn the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds."
  },
  {
    "id": 2550172,
    "name": "Win-Win Cloud Offshoring Analytics",
    "department": "Marketing",
    "startedOn": "2000-08-03T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitekoala266",
     "heavyladybug740",
     "bluepanda354",
      "silverwolf910"
    ],
    "description": "Efficiencies will come from dynamically growing our deliverables. Key players will take ownership of their action points by intelligently strategizing immersive step-changes. Change the way you do business - adopt mobile enterprises. Going forward, our value-added stakeholder will deliver value to paradigm shifts.\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs."
  },
  {
    "id": 5145073,
    "name": "End To End Actionable Social Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2007-09-28T05:00:00.000Z",
    "endedOn": "2015-06-05T05:00:00.000Z",
    "assigned": [
     "yellowcat935",
     "ticklishpanda298",
     "whitecat119",
     "redtiger449",
     "goldenbird725",
     "orangefrog731",
     "lazyrabbit169",
     "greenfish196",
     "orangegorilla363",
      "greengoose892"
    ],
    "description": "Our business leverages team players to ethically and proactively connect our customer-focused brand. Intelligently revolutionizing globally best-in-class best practices is crucial to our seamless agile workflow. In the future, will you be able to strategically align stand-ups in your business? Going forward, our seamless bandwidth will deliver value to alignments.\n\nKey players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nChange the way you do business - adopt customer-focused clouds. Going forward, our end-to-end proposition will deliver value to team players. In the future, will you be able to effectively calibrate stand-ups in your business? Change the way you do business - adopt holistic innovations.\n\nProactively impacting virtually mission critical drivers is crucial to our immersive architecture. In the capability space, industry is reliably calibrating its long-term alignments. Key players will take ownership of their core competencies by ethically growing best-of-breed enterprises. Efficiencies will come from intelligently transforming our team players."
  },
  {
    "id": 2670474,
    "name": "Touch Enabled Offshoring Cloud Initiative",
    "department": "Accounting",
    "startedOn": "2007-10-03T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "orangefrog731",
     "bluepanda840",
     "orangegorilla363",
     "yellowcat935",
     "greengoose892",
     "crazypanda274",
     "purplemeercat491",
     "greenfish196",
     "goldenbird725",
     "yellowpanda940",
      "lazyrabbit169"
    ],
    "description": "We aim to dynamically invest our low hanging fruit by intelligently impacting our mobile competitive standpoints. In the dot-bomb space, industry is iteratively revolutionizing its actionable stand-ups. Efficiencies will come from globally investing our ballpark figures. We aim to ethically offshore our game changer by intelligently strategizing our holistic value-added synergies."
  },
  {
    "id": 4312175,
    "name": "Short Term Strategic Analytics",
    "department": "Sales",
    "startedOn": "2004-12-14T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "tinykoala298",
     "whitebutterfly382",
     "purplewolf498",
     "ticklishdog505",
     "heavywolf437",
     "orangeostrich499",
      "yellowtiger366"
    ],
    "description": "Intelligently deep-diving ethically best-of-breed bandwidths is crucial to our mission critical platform. So we can hit the ground running, we will be globally reusing every ballpark figure in our space. Effectively transforming iteratively actionable prince2 practitioners is crucial to our long-term standpoint. Efficiencies will come from reliably investing our stacks.\n\nChange the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches.\n\nKey players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs."
  },
  {
    "id": 8708676,
    "name": "Long-Tail Efficient Dynamic Mobile App",
    "department": "Human Resources",
    "startedOn": "2007-03-24T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "orangebird478",
      "whitepeacock532"
    ],
    "description": "We aim to dynamically invest our low hanging fruit by intelligently impacting our mobile competitive standpoints. In the dot-bomb space, industry is iteratively revolutionizing its actionable stand-ups. Efficiencies will come from globally investing our ballpark figures. We aim to ethically offshore our game changer by intelligently strategizing our holistic value-added synergies.\n\nEfficiencies will come from proactively growing our market foci. Going forward, our mobile paradigm shift will deliver value to big datas. Going forward, our immersive agile workflow will deliver value to enterprises. Key players will take ownership of their deliverables by virtually connecting innovative core competencies.\n\nSo we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space."
  },
  {
    "id": 4340577,
    "name": "Touch Enabled Strategic Innovative Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "2010-07-12T05:00:00.000Z",
    "endedOn": "2014-01-18T06:00:00.000Z",
    "assigned": [
     "lazymeercat712",
     "goldenfrog222",
     "smallfrog632",
     "blackelephant246",
     "bigelephant907",
     "orangebird478",
      "redrabbit642"
    ],
    "description": "Effectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nGoing forward, our end-to-end low hanging fruit will deliver value to enterprises. So we can hit the ground running, we will be dynamically connecting every silo in our space. Change the way you do business - adopt best-of-breed clouds. In the future, will you be able to virtually synergise organic growths in your business?"
  },
  {
    "id": 6047078,
    "name": "End To End Social Analytics",
    "department": "Human Resources",
    "startedOn": "2009-10-01T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitetiger788",
     "yellowbird585",
     "blackpeacock213",
      "whitepeacock532"
    ],
    "description": "Change the way you do business - adopt customer-focused clouds. Going forward, our end-to-end proposition will deliver value to team players. In the future, will you be able to effectively calibrate stand-ups in your business? Change the way you do business - adopt holistic innovations."
  },
  {
    "id": 7991379,
    "name": "Customer Focused Offshoring Dynamic Mobile App",
    "department": "Human Resources",
    "startedOn": "2002-02-03T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "goldenfrog222",
     "blackpeacock213",
     "smallfrog632",
     "redrabbit642",
      "orangebird478"
    ],
    "description": "Effectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities.\n\nSo we can hit the ground running, we will be globally investing every capability in our space. Efficiencies will come from intelligently synergising our agile workflows. In the future, will you be able to ethically impact visibilities in your business? So we can hit the ground running, we will be effectively connecting every stand-up in our space."
  },
  {
    "id": 8268180,
    "name": "End To End Virtual Initiative",
    "department": "Sales",
    "startedOn": "2010-04-05T05:00:00.000Z",
    "endedOn": "2013-05-28T05:00:00.000Z",
    "assigned": [
     "orangeelephant668",
      "orangeostrich499"
    ],
    "description": "Going forward, our best-of-breed visibility will deliver value to clouds. Globally aligning proactively mobile innovations is crucial to our holistic enterprise. So we can hit the ground running, we will be strategically revolutionizing every organic growth in our space. Going forward, our immersive synergy will deliver value to action points.\n\nGoing forward, our end-to-end market focus will deliver value to standpoints. Efficiencies will come from globally calibrating our capabilities. We aim to reliably offshore our alignment by ethically growing our best-in-class seamless visibilities. Strategically transforming reliably holistic innovations is crucial to our mission critical prince2 practitioner."
  },
  {
    "id": 9772981,
    "name": "End To End Offshoring Analytics",
    "department": "Sales",
    "startedOn": "2005-01-16T06:00:00.000Z",
    "endedOn": "2015-12-05T06:00:00.000Z",
    "assigned": [
     "ticklishbear822",
     "bigsnake928",
     "ticklishbird555",
     "crazyladybug288",
     "brownmouse229",
     "bluetiger546",
     "ticklishdog505",
     "blackpanda397",
     "bluerabbit187",
     "smallwolf576",
     "orangeelephant668",
     "crazygorilla336",
     "whitebutterfly382",
      "tinykoala298"
    ],
    "description": "So we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space.\n\nIn the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?"
  },
  {
    "id": 8346982,
    "name": "Long-Tail CMS Global System",
    "department": "Accounting",
    "startedOn": "2011-11-23T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greenfish196",
      "bluepanda840"
    ],
    "description": "In the future, will you be able to iteratively revolutionize agile workflows in your business? Going forward, our customer-focused platform will deliver value to organic growths. Intelligently offshoring virtually competitive architectures is crucial to our value-added capability. In the milestone space, industry is iteratively deep-diving its mobile clouds.\n\nIntelligently deep-diving ethically best-of-breed bandwidths is crucial to our mission critical platform. So we can hit the ground running, we will be globally reusing every ballpark figure in our space. Effectively transforming iteratively actionable prince2 practitioners is crucial to our long-term standpoint. Efficiencies will come from reliably investing our stacks."
  },
  {
    "id": 9499883,
    "name": "Next Gen Logistical Synergistic Mobile App",
    "department": "Human Resources",
    "startedOn": "2002-09-24T05:00:00.000Z",
    "endedOn": "2013-08-26T05:00:00.000Z",
    "assigned": [
     "yellowbird585",
     "ticklishgorilla951",
     "redrabbit642",
      "blackpeacock213"
    ],
    "description": "So we can hit the ground running, we will be dynamically monetizing every standpoint in our space. Change the way you do business - adopt actionable diversities. We aim to effectively integrate our game changer by strategically relaying our value-added mobile action points. So we can hit the ground running, we will be reliably deep-diving every user experience in our space."
  },
  {
    "id": 9417284,
    "name": "Long Term Global Virtual Mobile Platform",
    "department": "Accounting",
    "startedOn": "2010-12-24T06:00:00.000Z",
    "endedOn": "2015-10-21T05:00:00.000Z",
    "assigned": [
     "greengoose892",
     "lazypanda966",
     "ticklishpanda298",
     "goldenbird725",
     "tinyduck628",
     "silversnake507",
     "yellowcat935",
     "whitecat119",
     "purplemeercat491",
     "crazypanda274",
      "biggoose954"
    ],
    "description": "So we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables.\n\nEffectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 6709885,
    "name": "Client/Server Synergistic Initiative",
    "department": "Accounting",
    "startedOn": "2002-07-13T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "greengoose892",
     "silversnake507",
     "lazyrabbit169",
     "bigmouse194",
     "greenfish196",
     "beautifulcat2",
     "orangefrog731",
      "tinyduck628"
    ],
    "description": "Proactively impacting virtually mission critical drivers is crucial to our immersive architecture. In the capability space, industry is reliably calibrating its long-term alignments. Key players will take ownership of their core competencies by ethically growing best-of-breed enterprises. Efficiencies will come from intelligently transforming our team players.\n\nKey players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nOur business leverages team players to ethically and proactively connect our customer-focused brand. Intelligently revolutionizing globally best-in-class best practices is crucial to our seamless agile workflow. In the future, will you be able to strategically align stand-ups in your business? Going forward, our seamless bandwidth will deliver value to alignments.\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs."
  },
  {
    "id": 3416586,
    "name": "Short Term Holistic CMS Analytics",
    "department": "Accounting",
    "startedOn": "2006-08-03T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "tinyduck628",
     "goldenbird725",
     "yellowcat935",
      "greenpeacock556"
    ],
    "description": "We aim to dynamically invest our low hanging fruit by intelligently impacting our mobile competitive standpoints. In the dot-bomb space, industry is iteratively revolutionizing its actionable stand-ups. Efficiencies will come from globally investing our ballpark figures. We aim to ethically offshore our game changer by intelligently strategizing our holistic value-added synergies.\n\nEfficiencies will come from dynamically growing our deliverables. Key players will take ownership of their action points by intelligently strategizing immersive step-changes. Change the way you do business - adopt mobile enterprises. Going forward, our value-added stakeholder will deliver value to paradigm shifts."
  },
  {
    "id": 5571387,
    "name": "Long-Tail Social B2B Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2006-05-12T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "lazypanda966",
     "blackbird181",
     "orangefrog731",
      "beautifulcat2"
    ],
    "description": "Efficiencies will come from proactively growing our market foci. Going forward, our mobile paradigm shift will deliver value to big datas. Going forward, our immersive agile workflow will deliver value to enterprises. Key players will take ownership of their deliverables by virtually connecting innovative core competencies.\n\nIn the future, will you be able to proactively align capabilities in your business? Change the way you do business - adopt best-in-class dot-bombs. In the future, will you be able to globally leverage enterprises in your business? Key players will take ownership of their core competencies by virtually connecting actionable siloes."
  },
  {
    "id": 1744488,
    "name": "Long Term Efficient Mobile Initiative",
    "department": "Human Resources",
    "startedOn": "2010-07-27T05:00:00.000Z",
    "endedOn": "2015-10-14T05:00:00.000Z",
    "assigned": [
     "yellowbird585",
     "orangebird478",
     "tinymouse298",
      "blackpeacock213"
    ],
    "description": "Effectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 1974889,
    "name": "Next Gen Strategic Outsourcing Platform",
    "department": "Sales",
    "startedOn": "1990-07-10T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "purplewolf498",
      "blackpanda397"
    ],
    "description": "Going forward, our competitive proposition will deliver value to emerging markets. Our business impacts emerging markets to reliably and dynamically reuse our mission critical big data. Efficiencies will come from globally strategizing our best practices. Going forward, our end-to-end bandwidth will deliver value to synergies.\n\nChange the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches."
  },
  {
    "id": 8329890,
    "name": "Cross Platform Virtual Analytics",
    "department": "Marketing",
    "startedOn": "2002-03-25T06:00:00.000Z",
    "endedOn": "2013-09-26T05:00:00.000Z",
    "assigned": [
     "purplepanda527",
      "smallostrich593"
    ],
    "description": "Key players will take ownership of their stand-ups by globally offshoring innovative innovations. Change the way you do business - adopt immersive executive searches. Key players will take ownership of their alignments by intelligently transforming innovative prince2 practitioners. In the future, will you be able to ethically invest stakeholders in your business?\n\nIn the stakeholder space, industry is effectively virtualising its customer-focused best practices. We aim to dynamically synergise our enterprise by intelligently reusing our value-added mobile ballpark figures. We aim to ethically revolutionize our capability by virtually monetizing our seamless proactive visibilities. In the future, will you be able to globally incentivize synergies in your business?"
  },
  {
    "id": 3104491,
    "name": "Customer Focused Cloud Analytics",
    "department": "Human Resources",
    "startedOn": "1992-03-01T06:00:00.000Z",
    "endedOn": "2014-04-15T05:00:00.000Z",
    "assigned": [
     "goldenbutterfly797",
     "whitepeacock532",
     "bigelephant907",
     "whitetiger788",
     "goldenfrog222",
     "smallfrog632",
     "lazymeercat712",
     "redrabbit642",
     "blackpeacock213",
     "whitecat698",
      "orangebird478"
    ],
    "description": "Intelligently deep-diving ethically best-of-breed bandwidths is crucial to our mission critical platform. So we can hit the ground running, we will be globally reusing every ballpark figure in our space. Effectively transforming iteratively actionable prince2 practitioners is crucial to our long-term standpoint. Efficiencies will come from reliably investing our stacks.\n\nKey players will take ownership of their dot-bombs by strategically reusing immersive capabilities. In the future, will you be able to effectively revolutionize step-changes in your business? In the future, will you be able to iteratively grow action points in your business? We aim to proactively strategize our big data by intelligently investing our holistic actionable bandwidths.\n\nWe aim to effectively relay our bandwidth by strategically revolutionizing our immersive actionable milestones. Going forward, our best-in-class platform will deliver value to siloes. Intelligently growing globally competitive best practices is crucial to our holistic synergy. Going forward, our mission critical architecture will deliver value to market foci."
  },
  {
    "id": 5834292,
    "name": "Long-Tail Holistic Initiative",
    "department": "Accounting",
    "startedOn": "2010-10-16T05:00:00.000Z",
    "endedOn": "2015-06-10T05:00:00.000Z",
    "assigned": [
     "lazyrabbit169",
     "biggoose954",
      "orangegorilla363"
    ],
    "description": "In the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs.\n\nGoing forward, our end-to-end market focus will deliver value to standpoints. Efficiencies will come from globally calibrating our capabilities. We aim to reliably offshore our alignment by ethically growing our best-in-class seamless visibilities. Strategically transforming reliably holistic innovations is crucial to our mission critical prince2 practitioner.\n\nChange the way you do business - adopt proactive prince2 practitioners. Efficiencies will come from strategically integrating our agile workflows. Key players will take ownership of their platforms by dynamically deep-diving best-in-class propositions. Change the way you do business - adopt innovative siloes.\n\nSo we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables."
  },
  {
    "id": 7909893,
    "name": "Next Gen Outsourcing Mobile Platform",
    "department": "Human Resources",
    "startedOn": "2010-07-18T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "redrabbit642",
     "whitekoala138",
      "greenwolf347"
    ],
    "description": "Ethically growing iteratively customer-focused prince2 practitioners is crucial to our immersive synergy. Our business virtualises core assets to intelligently and proactively incentivize our long-term architecture. So we can hit the ground running, we will be virtually calibrating every enterprise in our space. Key players will take ownership of their core competencies by effectively connecting best-in-class diversities."
  },
  {
    "id": 7642894,
    "name": "Short Term Efficient System",
    "department": "Sales",
    "startedOn": "2004-03-21T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "whitebutterfly382",
     "organicbear74",
     "ticklishbutterfly1",
     "silverbird464",
     "whitemouse304",
     "bluerabbit187",
     "blackpanda397",
     "bluemeercat66",
     "bigsnake928",
     "redwolf207",
     "beautifulleopard367",
     "tinykoala298",
     "blackbird733",
      "purplewolf498"
    ],
    "description": "In the agile workflow space, industry is effectively connecting its long-term core competencies. Efficiencies will come from proactively deep-diving our diversities. In the team player space, industry is globally leveraging its innovative drivers. Our business relays propositions to proactively and globally strategize our immersive paradigm shift."
  },
  {
    "id": 2077095,
    "name": "Cross Platform Innovative Platform",
    "department": "Sales",
    "startedOn": "2010-10-23T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "ticklishdog505",
     "yellowladybug535",
      "orangeelephant668"
    ],
    "description": "In the future, will you be able to proactively align capabilities in your business? Change the way you do business - adopt best-in-class dot-bombs. In the future, will you be able to globally leverage enterprises in your business? Key players will take ownership of their core competencies by virtually connecting actionable siloes.\n\nGoing forward, our actionable stack will deliver value to drivers. Our business integrates game changers to strategically and proactively calibrate our innovative capability. Efficiencies will come from effectively virtualising our clouds. Key players will take ownership of their siloes by strategically offshoring best-of-breed innovations.\n\nEffectively offshoring ethically competitive deliverables is crucial to our best-of-breed user experience. Key players will take ownership of their diversities by reliably synergising proactive milestones. So we can hit the ground running, we will be virtually virtualising every core asset in our space. In the executive search space, industry is strategically calibrating its customer-focused capabilities."
  },
  {
    "id": 6491096,
    "name": "Customer Focused Branding System",
    "department": "Sales",
    "startedOn": "1994-03-08T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "crazygorilla336",
     "greenswan929",
     "ticklishbutterfly1",
     "bluerabbit187",
     "bluemeercat298",
     "blackpanda397",
     "yellowleopard565",
     "greenostrich439",
     "brownmouse229",
     "whitebutterfly382",
     "ticklishlion619",
      "yellowdog110"
    ],
    "description": "In the future, will you be able to ethically align capabilities in your business? We aim to effectively deep-dive our standpoint by globally impacting our long-term competitive market foci. Our business relays platforms to iteratively and virtually reuse our mission critical visibility. In the future, will you be able to reliably invest ballpark figures in your business?\n\nChange the way you do business - adopt customer-focused clouds. Going forward, our end-to-end proposition will deliver value to team players. In the future, will you be able to effectively calibrate stand-ups in your business? Change the way you do business - adopt holistic innovations.\n\nIn the future, will you be able to strategically relay architectures in your business? Key players will take ownership of their game changers by dynamically deep-diving long-term core assets. Our business transforms synergies to reliably and iteratively virtualise our mission critical stakeholder. In the future, will you be able to effectively integrate stacks in your business?\n\nIn the standpoint space, industry is dynamically calibrating its proactive user experiences. Our business offshores step-changes to reliably and proactively align our end-to-end ballpark figure. Our business deep-dives brands to strategically and virtually incentivize our best-in-class action point. In the organic growth space, industry is iteratively virtualising its value-added dot-bombs."
  },
  {
    "id": 8567197,
    "name": "Customer Focused Proactive Platform",
    "department": "Marketing",
    "startedOn": "2000-10-28T05:00:00.000Z",
    "endedOn": "2014-06-04T05:00:00.000Z",
    "assigned": [
     "brownpeacock222",
     "purplepanda527",
     "jdoe",
     "whitekoala266",
     "yellowwolf751",
     "blackrabbit3",
     "silverrabbit923",
     "ticklishgoose874",
      "silverwolf910"
    ],
    "description": "Effectively virtualising iteratively mission critical emerging markets is crucial to our best-in-class market focus. Our business synergises paradigm shifts to virtually and globally monetize our proactive organic growth. In the future, will you be able to proactively reuse big datas in your business? Going forward, our value-added step-change will deliver value to deliverables."
  },
  {
    "id": 3670398,
    "name": "Win-Win Cloud Mobile Initiative",
    "department": "Accounting",
    "startedOn": "2003-09-22T05:00:00.000Z",
    "endedOn": "2015-03-24T05:00:00.000Z",
    "assigned": [
     "beautifulcat2",
     "orangegorilla363",
     "silversnake507",
     "yellowcat935",
      "biggoose954"
    ],
    "description": "In the future, will you be able to iteratively align emerging markets in your business? So we can hit the ground running, we will be ethically monetizing every ballpark figure in our space. Our business incentivizes platforms to virtually and dynamically integrate our value-added brand. So we can hit the ground running, we will be intelligently reusing every best practice in our space."
  },
  {
    "id": 6433599,
    "name": "Short Term Global Key Mobile Platform",
    "department": "Sales",
    "startedOn": "2010-02-06T06:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "goldenkoala942",
      "greenostrich439"
    ],
    "description": "Key players will take ownership of their dot-bombs by strategically reusing immersive capabilities. In the future, will you be able to effectively revolutionize step-changes in your business? In the future, will you be able to iteratively grow action points in your business? We aim to proactively strategize our big data by intelligently investing our holistic actionable bandwidths.\n\nChange the way you do business - adopt best-of-breed deliverables. Our business strategizes clouds to proactively and virtually transform our mobile proposition. Key players will take ownership of their prince2 practitioners by iteratively monetizing long-term stacks. Change the way you do business - adopt innovative executive searches.\n\nIn the stakeholder space, industry is effectively virtualising its customer-focused best practices. We aim to dynamically synergise our enterprise by intelligently reusing our value-added mobile ballpark figures. We aim to ethically revolutionize our capability by virtually monetizing our seamless proactive visibilities. In the future, will you be able to globally incentivize synergies in your business?\n\nSo we can hit the ground running, we will be reliably calibrating every paradigm shift in our space. Ethically relaying strategically seamless drivers is crucial to our best-of-breed enterprise. Effectively transforming globally proactive stacks is crucial to our holistic proposition. In the brand space, industry is dynamically strategizing its long-term deliverables."
  },
  {
    "id": 90272100,
    "name": "Win-Win Global Mobile Initiative",
    "department": "Marketing",
    "startedOn": "2010-06-08T05:00:00.000Z",
    "endedOn": null,
    "assigned": [
     "brownpeacock222",
      "crazyduck410"
    ],
    "description": "So we can hit the ground running, we will be globally investing every capability in our space. Efficiencies will come from intelligently synergising our agile workflows. In the future, will you be able to ethically impact visibilities in your business? So we can hit the ground running, we will be effectively connecting every stand-up in our space.\n\nGoing forward, our proactive low hanging fruit will deliver value to market foci. Key players will take ownership of their team players by proactively synergising best-of-breed step-changes. In the future, will you be able to virtually leverage visibilities in your business? Change the way you do business - adopt holistic ballpark figures."
  }
]

},{}]},{},[2])(2)
});
//# sourceMappingURL=static-mock-data.js.map
