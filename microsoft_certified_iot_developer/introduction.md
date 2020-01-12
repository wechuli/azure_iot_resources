## What is Azure Internet of Things (IoT)?

The Azure Internet of Things(IoT) is a collection of Microsoft-managed cloud services that connect, monitor and control billions of IoT assets. An IoT solution is made up of one or more IoT devices and one or more back-end services running in the cloud that communicate with each other.

## Introduction

The main parts of an IoT solution are as follows: devices, back-end services, and the communications between the two.

### IoT Devices

Devices are generally made up of a circuit board with sensors attached that connect to the internet. Many devices communicate via a Wi-Fi chip.
Here are some examples of IoT devices:

- pressure sensors on a remote oil pump
- temperature and humidity sensors in an air-conditioning unit
- accelerometers in an elevator

The IoT Device SDKs enable you to build apps that run on your devices so they can perform the tasks you need. With the SDKs, you can send telemetry to your IoT hub, receive messages and updates from the IoT Hub, and so on.

### Communication

Your device can communicate with back-end services in both directions. Here are some examples of ways that the device can communicate with the back-end solution.

Examples:

- Your device may send temperature from a mobile refrigeration truck every 5 minutes to an IoT Hub.
- The back-end service can ask the device to send telemetry more frequently to help diagnose a problem.
- Your device can send alerts based on the values read from its sensors. For example, if monitoring a batch reactor in a chemical plant, you may want to send an alert when the temperatures exceeds a certain value.
- Your device can send information to a dashboard for viewing by human operators. For example, a control room in a refinery may show the temperature and pressure of each pipe, as well as the volume flowing through that pipe, allowing the operators to watch it.

These tasks, and more, can be implemented using the IoT Device SDKs.

#### Connection Considerations

Connecting devices securely and reliably is often the biggest challenge in IoT solutions. This is because IoT devices have different characteristics when compared to other clients such as browsers and mobile apps. Specifically, IoT devices:

- Are often embedded systems with no human operator (unlike a phone).
- Can be deployed in remote locations, where physical access is expensive.
- May only be reachable through the solution back end. There is no other way to interact with the device.
- May have limited power and processing resources.
- May have intermittent, slow, or expensive network connectivity.
- May need to use proprietary, custom, or industry-specific application protocols

### Back-end Services

Here are some of the functions a back-end service can provide.

- Receiving telemetry at scale from your devices, and determining how to process and store that data.
- Analyzing the telemetry to provide insights, either in real time or after the fact.
- Sending commands from the cloud to a specific device.
- Provisioning devices and control which devices can connect to your infrastructure.
- Control the state of your devices and monitor their activities.

## IoT Services

There are several IoT-related services in Azure.

1. **IoT Central** - This is an IoT application that simplifies the creation of IoT solutions and helps to reduce the burden and cost of IoT management operations and development. To start, you select a template for your device type and create and test a basic IoT Central application that the operators of the device will use. The IoT Central application will also enable you to monitor the devices and provision new devices. This service is for straightforward solutions that don't require deep service customization.
2. **IoT Solution accelerators** - This is a collection of PaaS solutions you can use to accelerate your development of an IoT solution. You start with a provided IoT solution and then fully customize that solution to your requirements. You need Java or .NET skills to customize the back-end, and JavaScript skills to customize the visualization.
3. **IoT Hubs** - This service allows you to connect from your devices to an IoT hub, and monitor and control billions of IoT devices. This is especially useful if you need bi-directional communication between your IoT devices and your back end. This is the underlying service for IoT Central and IoT solution accelerators.
4. **IoT Hub Device Provisioning Service** - This is a helper service for IoT Hub that you can use to provision devices to your IoT hub securely. With this service, you can easily provision millions of devices rapidly, rather than provisioning them one by one.
5. **IoT Edge** - This service builds on top of IoT Hub. It can be used to analyze data on the IoT devices rather than in the cloud. By moving parts of your workload to the edge, fewer messages need to be sent to the cloud.
6. **Azure Digital Twins** - This service enables you to create comprehensive models of the physical environment. You can model the relationships and interactions between people, spaces, and devices. For example, you can predict maintenance needs for a factory, analyze real-time energy requirements for an electrical grid, or optimize the use of available space for an office.
7. **Time Series Insights** - This service enables you to store, visualize, and query large amounts of time series data generated by IoT devices. You can use this service with IoT Hub.
8. **Azure Maps** - This service provides geographic information to web and mobile applications.There is a full set of REST APIs as well as a web-based JavaScript control that can be used to create flexible applications that work on desktop or mobile applications for both Apple and Windows devices.
