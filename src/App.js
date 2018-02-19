import React, { Component } from 'react';
import './App.css';
import Lifecycle from './lifecycle';
import LifecycleCell from './lifecycle-cell'

class App extends Component {

  render() {
    var data = {
      "data_lifecycle":{
        // "header":[
        //   {},
        //   {
        //     "label": "Detractor (0-6)",
        //     "icon": "fa-detractor"
        //   },
        //   {
        //     "label": "Passive (7-8)",
        //     "icon": "fa-passive"
        //   },
        //   {
        //     "label": "Promoter (9-10)",
        //     "icon": "fa-promoter"
        //   },
        //   {
        //     "label": "No response",
        //     "icon": "fa-question",
        //     "style":{
        //       "marginLeft":true
        //     }
        //   }
        // ],
        "body":[
          [
            {
              "style":{
                "backgroundColor":"white"
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"black"
                }
              }
            },
            {
              "style":{
                "backgroundColor":"red",
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"white"
                }
              }
            },
            {
              "data":{},
              "style":{
                "backgroundColor":"grey",
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              }
            },
            {
              "style":{
                "backgroundColor":"green",
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"white"
                }
              }
            },
            {
              "style":{
                "backgroundColor":"darkGrey",
                "marginLeft":true,
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"white"
                }
              }
            }
          ],
          [
            {
              "style":{
                "backgroundColor":"white",
                "borderTop":{
                  "color":"red",
                  "style":"dashed"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"black"
                }
              }
            },
            {
              "style":{
                "backgroundColor":"red",
                "borderTop":{
                  "color":"white",
                  "style":"solid"
                },
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"white"
                }
              }
            },
            {
              "style":{
                "backgroundColor":"grey",
                "borderTop":{
                  "color":"white",
                  "style":"solid"
                },
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
            "content":{
              "component":"LifecycleCell",
              "data":{
                "total_revenue":"$12.5M",
                "average_revenue":"avg. $1.5K",
                "total_contact":200,
              },
              "style":{
                "color":"white"
              }
            }
            },
            {
              "style":{
                "backgroundColor":"green",
                "borderTop":{
                  "color":"white",
                  "style":"solid"
                },
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"white"
                }
              }
            },
            {
              "style":{
                "backgroundColor":"darkGrey",
                "marginLeft":true,
                "borderTop":{
                  "color":"white",
                  "style":"solid"
                },
                "borderLeft":{
                  "color":"white",
                  "style":"solid"
                }
              },
              "content":{
                "component":"LifecycleCell",
                "data":{
                  "total_revenue":"$12.5M",
                  "average_revenue":"avg. $1.5K",
                  "total_contact":200,
                },
                "style":{
                  "color":"white"
                }
              }
            }
          ]
        ]
      }
    }

    var components = {
      "LifecycleCell":LifecycleCell
    };

    return (
      <Lifecycle data={data.data_lifecycle} components={components}/>
    );
  }
}

export default App;
