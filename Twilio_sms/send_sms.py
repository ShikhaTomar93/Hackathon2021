from twilio.rest import Client
from Twilio import account_sid, auth_token, my_cell, my_twilio

# Find these values at https://twilio.com/user/account
client = Client(account_sid, auth_token)

my_msg = ''.join(['Improvised_Chaos\n' for i in range(5)])

message = client.messages.create(to=my_cell, from_=my_twilio,
                                     body=my_msg)

print(1100)