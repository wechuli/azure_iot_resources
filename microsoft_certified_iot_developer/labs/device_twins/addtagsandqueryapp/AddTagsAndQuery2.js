"use strict";
var iothub = require("azure-iothub");
var connectionString =
  "HostName=wechub.azure-devices.net;SharedAccessKeyName=serviceAndRegistryRead;SharedAccessKey=jc38yYz7r2dyURBBfiPex88xVYEp18jBWvWfi1vMj+U=";
var registry = iothub.Registry.fromConnectionString(connectionString);

registry.getTwin("myDeviceId", function(err, twin) {
  if (err) {
    console.error(err.constructor.name + ": " + err.message);
  } else {
    var patch = {
      tags: {
        location: {
          region: "Kenya",
          plant: "Juja"
        }
      }
    };

    twin.update(patch, function(err) {
      if (err) {
        console.error(
          "Could not update twin: " + err.constructor.name + ": " + err.message
        );
      } else {
        console.log(twin.deviceId + " twin updated successfully");
        queryTwins();
      }
    });
  }
});

var queryTwins = function() {
  var query = registry.createQuery(
    "SELECT * FROM devices WHERE tags.location.plant = 'Juja'",
    100
  );
  query.nextAsTwin(function(err, results) {
    if (err) {
      console.error("Failed to fetch the results: " + err.message);
    } else {
      console.log(
        "Devices in Juja: " +
          results
            .map(function(twin) {
              return twin.deviceId;
            })
            .join(",")
      );
    }
  });

  query = registry.createQuery(
    "SELECT * FROM devices WHERE tags.location.plant = 'Juja' AND properties.reported.connectivity.type = 'cellular'",
    100
  );
  query.nextAsTwin(function(err, results) {
    if (err) {
      console.error("Failed to fetch the results: " + err.message);
    } else {
      console.log(
        "Devices in Juja using cellular network: " +
          results
            .map(function(twin) {
              return twin.deviceId;
            })
            .join(",")
      );
    }
  });
};
