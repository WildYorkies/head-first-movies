// Attempt to set variables based off of Omniture values
    if (typeof s !== 'undefined') {
        lpTag.section= [ s.pageName ];
        //SetOmnitureValueAsVariable(s.prop18, 'InvestorID');
        //SetOmnitureValueAsVariable(s.eVar14, 'AccountType');
        //SetOmnitureValueAsVariable(s.eVar17, 'AccountNumber');
        //SetOmnitureValueAsVariable(s.eVar20, 'Tenure');
        //SetOmnitureValueAsVariable(s.eVar21, 'CommonCustomer');
        //SetOmnitureValueAsVariable(s.eVar23, 'RTQEligibility');
        //SetOmnitureValueAsVariable(s.eVar22, 'PricingProgram');
        

        var events = typeof s.events === 'undefined' ? '' : s.events;
        var prop4 = typeof s.prop4 === 'undefined' ? '' : s.prop4;
        
        if (events.indexOf('event8') !== -1) {
            lpTag.sdes = lpTag.sdes||[];
            lpTag.sdes.push(
              {
                    "type": "purchase",
                    "cart":{
                        "products": [{
                            "product": { "name": "AccountSetupConversion" },
                            "quantity": 1
                        }]
                    }
              }
            );
        } else if (events.indexOf('event10') !== -1) {
            lpTag.sdes = lpTag.sdes||[];
            lpTag.sdes.push(
              {
                    "type": "purchase",
                    "cart":{
                        "products": [{
                            "product": { "name": "PricingProgramConversion" },
                            "quantity": 1
                        }]
                    }
              }
            );
        } else if (events.indexOf('event11') !== -1) {
            if (prop4.indexOf('Real-Time Trade') !== -1) {
                lpTag.sdes = lpTag.sdes||[];
                lpTag.sdes.push(
                  {
                        "type": "purchase",
                        "cart":{
                            "products": [{
                                "product": { "name": "StockTradeConversion" },
                                "quantity": 1
                            }]
                        }
                  }
                );
            } else if (prop4.indexOf('Mutual Fund Trade') !== -1) {
              lpTag.sdes = lpTag.sdes||[];
                lpTag.sdes.push(
                  {
                        "type": "purchase",
                        "cart":{
                            "products": [{
                                "product": { "name": "MFTradeConversion" },
                                "quantity": 1
                            }]
                        }
                  }
                );
            } else if (prop4.indexOf('Options Trade') !== -1) {
                lpTag.sdes = lpTag.sdes||[];
                lpTag.sdes.push(
                  {
                        "type": "purchase",
                        "cart":{
                            "products": [{
                                "product": { "name": "OptionTradeConversion" },
                                "quantity": 1
                            }]
                        }
                  }
                );
            }
        } else if (events.indexOf('event14') !== -1) {
            lpTag.sdes = lpTag.sdes||[];
                lpTag.sdes.push(
                  {
                        "type": "purchase",
                        "cart":{
                            "products": [{
                                "product": { "name": "AccountTransferConversion" },
                                "quantity": 1
                            }]
                        }
                  }
                );
        } else if (events.indexOf('event13') !== -1) {
            lpTag.sdes = lpTag.sdes||[];
                lpTag.sdes.push(
                  {
                        "type": "purchase",
                        "cart":{
                            "products": [{
                                "product": { "name": "MoneyTransferConversion" },
                                "quantity": 1
                            }]
                        }
                  }
                );
        }
    }
