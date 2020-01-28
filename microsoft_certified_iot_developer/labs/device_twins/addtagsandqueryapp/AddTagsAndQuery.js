"use strict";
const iothub = require("azure-iothub");
const connectionString =
  "HostName=wechub.azure-devices.net;SharedAccessKeyName=serviceAndRegistryRead;SharedAccessKey=jc38yYz7r2dyURBBfiPex88xVYEp18jBWvWfi1vMj+U=";
const registry = iothub.Registry.fromConnectionString(connectionString);

registry
  .getTwin("myDeviceId")
  .then(twin => {
    let patch = {
      tags: {
        location: {
          region: "Kenya",
          plant: "Juja"
        }
      }
    };
    
    twin
      .update(patch)
      .then(() => {
        console.log(twin.deviceId + " twin updated successfully");
        queryTwins();
      })
      .catch(err =>
        console.error(
          "Could not update twin: " + err.constructor.name + ": " + err.message
        )
      );
  })
  .catch(err => console.error(err.constructor.name + ": " + err.message));

const queryTwins = function() {
  let query = registry.createQuery(
    "SELECT * FROM devices WHERE tags.location.plant = 'Juja'",
    100
  );

  query
    .nextAsTwin()
    .then(results => {
      console.log(
        "Devices in Juja: " +
          results
            .map(function(twin) {
              return twin.deviceId;
            })
            .join(",")
      );
    })
    .catch(err => console.error("Failed to fetch the results: " + err.message));

  query = registry.createQuery(
    "SELECT * FROM devices WHERE tags.location.plant = 'Juja' AND properties.reported.connectivity.type = 'cellular'",
    100
  );
  query.nextAsTwin(function(err, results) {
    if (err) {
      console.error("Failed to fetch the results: " + err.message);
    } else {
      console.log(
        "Devices in Redmond43 using cellular network: " +
          results
            .map(function(twin) {
              return twin.deviceId;
            })
            .join(",")
      );
    }
  });
};
