# import serial
# import time

# # Open serial port, make sure to update the port name
# ser = serial.Serial('COM9', 9600, timeout=1)

# # Wait for Arduino to reset
# time.sleep(2)

# try:
#     while True:
#         # Send data to Arduino
#         command = input("Enter command (1 for ON, 0 for OFF): ")
#         ser.write(command.encode())
        
#         # Wait for response
#         response = ser.readline().decode().strip()
#         print("Arduino:", response)
# except KeyboardInterrupt:
#     print("DFdfdf")
#     ser.close() # Close the serial port on keyboard interrupt


import serial
import time

# Open serial port, make sure to update the port name
# On Mac, the port name is usually something like '/dev/tty.usbmodemXXXX'
ser = serial.Serial('COM9', 9600, timeout=1)  # Replace 'XXXX' with the appropriate number

# Wait for Arduino to reset
time.sleep(2)

try:
    while True:
        # Send data to Arduino
        command = input("Enter command (1 for ON, 0 for OFF): ")
        ser.write(command.encode())
        
        # Wait for response
        # response = ser.readline().decode().strip()
        # print("Arduino:", response)
except KeyboardInterrupt:
    ser.close() # Close the serial port on keyboard interrupt