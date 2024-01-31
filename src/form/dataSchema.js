export const dataSchema={
  "type": "object",
  "properties": {
    "1": {
      "type": "object",
      "properties": {
        "2": { "type": "string", "title": "Patient First Name" },
        "3": { "type": "string", "title": "Patient Middle Name" },
        "4": { "type": "string", "title": "Patient Last Name" }
      },
      "required": ["2", "4"]
    },
    "5": {
      "type": "object",
      "properties": {
        "6": {
          "type": "object",
          "title": "",
          "properties": {
            "7": { "type": "boolean", "title": "" },
            "8": { "type": "boolean", "title": "" }
          }
        },
        "9": {
          "type": "object",
          "title": "",
          "properties": {
            "10": {
              "type": "string",
              "title": "",
              "enum": ["Never", "Occasionally", "Frequently"]
            }
          }
        },
        "11": {
          "type": "object",
          "title": "3. COLLAR SIZE",
          "properties": {
            "12": {
              "type": "array",
              "title": "Your Gender:",
              "items": {
                "type": "string",
                "enum": ["Male", "Female", "Other"]
              },
              "uniqueItems": false
            }
          }
        },
        "13": {
          "type": "object",
          "title": "",
          "properties": {
            "14": { "type": "boolean", "title": "" }
          }
        },
        "15": {
          "type": "object",
          "title": "5. DAYTIME SLEEPINESS",
          "properties": {
            "16": {
              "type": "string",
              "title": ""
            },
            "17": {
              "type": "boolean",
              "title": ""
            },
            "18": {
              "type": "boolean",
              "title": ""
            },
            "19": {
              "type": "string",
              "title": ""
            },
            "20": {
              "type": "object",
              "title": ""
            }
          }
        }
      }
    },
    "21": {
      "type": "object",
      "properties": {
        "22": {
          "type": "string",
          "title": ""
        },

        "23": {
          "type": "boolean",
          "title": ""
        },
        "24": {
          "type": "string",
          "title": ""
        },
        "25": {
          "type": "boolean",
          "title": ""
        },
        "26": {
          "type": "string",
          "title": ""
        },
        "27": {
          "type": "boolean",
          "title": ""
        },
        "28": {
          "type": "boolean",
          "title": ""
        },
        "29": {
          "type": "boolean",
          "title": ""
        },
        "30": {
          "type": "string",
          "title": "If Yes, Who:"
        },
        "31": {
          "type": "string",
          "title": "and When:"
        },
        "32": {
          "type": "boolean",
          "title": ""
        },
        "33": {
          "type": "string",
          "title": "If Yes, When:"
        },
        "34": {
          "type": "boolean",
          "title": ""
        },
        "35": {
          "type": "boolean",
          "title": ""
        },
        "36": {
          "type": "boolean",
          "title": ""
        },
        "37": {
          "type": "boolean",
          "title": ""
        },
        "38": {
          "type": "boolean",
          "title": ""
        },
        "39": {
          "type": "string",
          "title": ""
        },
        "40": {
          "type": "string",
          "title": ""
        },
        "41": {
          "type": "boolean",
          "title": ""
        },
        "42": {
          "type": "boolean",
          "title": ""
        },
        "43": {
          "type": "boolean",
          "title": ""
        },
        "44": {
          "type": "string",
          "title": "IF Yes, how many times?"
        }
      }
    },
    "45": {
      "type": "object",
      "properties": {
        "46": {
          "type": "string",
          "title": "",
          "enum": ["Adult", "Child"]
        }
      }
    },
    "47": {
      "type": "object",
      "properties": {
        "48": {
          "type": "string",
          "title": "",
          "format": "date"
        },
        "49": {
          "type": "string",
          "title": ""
        },
        "50": {
          "type": "string",
          "title": "",
          "enum": ["Male", "Female", "Prefer Not Mention"]
        },
        "51": {
          "type": "string",
          "title": ""
        },
        "52": {
          "type": "string",
          "title": ""
        },
        "53": {
          "type": "string",
          "title": ""
        },
        "54": {
          "type": "object",
          "title": ""
        },
        "55": {
          "type": "boolean",
          "title": ""
        },
        "56": {
          "type": "string",
          "title": "If yes - when did you have your last sleep test?"
        },
        "57": {
          "type": "boolean",
          "title": ""
        },
        "58": {
          "type": "boolean",
          "title": ""
        },
        "59": {
          "type": "boolean",
          "title": ""
        },
        "60": {
          "type": "string",
          "title": "If you are not happy - why?"
        },
        "61": {
          "type": "string",
          "title": ""
        },
        "62": {
          "type": "boolean",
          "title": ""
        },
        "63": {
          "type": "boolean",
          "title": ""
        },
        "64": {
          "type": "boolean",
          "title": ""
        },
        "65": {
          "type": "boolean",
          "title": ""
        },
        "66": {
          "type": "boolean",
          "title": ""
        },
        "67": {
          "type": "boolean",
          "title": ""
        },
        "68": {
          "type": "boolean",
          "title": ""
        },
        "69": {
          "type": "boolean",
          "title": ""
        },
        "70": {
          "type": "boolean",
          "title": ""
        },
        "71": {
          "type": "boolean",
          "title": ""
        },
        "72": {
          "type": "boolean",
          "title": ""
        }
      }
    },
    "73": {
      "type": "object",
      "properties": {
        "74": {
          "type": "object",
          "title": ""
        },
        "75": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "76": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "77": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "78": {
         "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "79": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "80": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "81": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "82": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["0", "1", "2", "3"]
          },
          "uniqueItems": false
        },
        "83": {
          "type": "string",
          "title": ""
        },
        "84": {
          "type": "object",
          "title": ""
        }
      }
    },
    "85": {
      "type": "object",
      "properties": {
        "86": {
          "type": "object",
          "title": ""
        },
        "87": {
          "type": "object",
          "title": ""
        },
        "88": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["Yes", "No", "Dont Know"]
          },
          "uniqueItems": false
        },
        "89": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["Slightly louder than breathing", "As loud as talking", "Louder than talking"]
          },
          "uniqueItems": false
        },
        "90": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": [
              "Almost everyday",
              "3-4 times per week",
              "1-2 times per week",
              "1-2 times per month",
              "Rarely or never"
            ]
          },
          "uniqueItems": false
        },
        "91": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["Yes", "No", "Dont Know"]
          },
          "uniqueItems": false
        },
        "92": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": [
              "Almost everyday",
              "3-4 times per week",
              "1-2 times per week",
              "1-2 times per month",
              "Rarely or never"
            ]
          },
          "uniqueItems": false
        },
        "93": {
          "type": "object",
          "title": ""
        },
        "94": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": [
              "Almost everyday",
              "3-4 times per week",
              "1-2 times per week",
              "1-2 times per month",
              "Rarely or never"
            ]
          },
          "uniqueItems": false
        },
        "95": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": [
              "Almost everyday",
              "3-4 times per week",
              "1-2 times per week",
              "1-2 times per month",
              "Rarely or never"
            ]
          },
          "uniqueItems": false
        },
        "96": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["Yes", "No"]
          },
          "uniqueItems": false
        },
        "97": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": [
              "Almost everyday",
              "3-4 times per week",
              "1-2 times per week",
              "1-2 times per month",
              "Rarely or never"
            ]
          },
          "uniqueItems": false
        },
        "98": {
          "type": "object",
          "title": ""
        },
        "99": {
          "type": "array",
          "title": "",
          "items": {
            "type": "string",
            "enum": ["Yes", "No", "Don\t Know"]
          },
          "uniqueItems": false
        },
        "100": {
          "type": "string",
          "title": ""
        },
        "101": {
          "type": "string",
          "title": "",
          "format": "date"
        }
      },
      "required": ["101"]
    }
  }
}
