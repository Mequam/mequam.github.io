# bot.py
import os

import discord

#create a new discord client
client = discord.Client()

#example of connecting an event
#the name of the function matters
#discord.py calls on_ready after the bot has connected
@client.event
async def on_ready():
#print out the guilds (servers) that we are connected to
	for guild in client.guilds:
		print(
		f'{client.user} is connected to the following guild:\n'
		f'{guild.name}(id: {guild.id})'
		)

#we add an event to recive a message!!
@client.event
async def on_message(msg):
	if msg.author != client.user:
		print('[{0}] {1}'.format(msg.author,msg.content))
		#broadcast any message that we recive
		for guild in client.guilds:
			for channel in guild.text_channels:
				await channel.send(msg.content)
				
TOKEN = 'OTY5OTQ3MjIzODU1MDk5OTA0.Ym0zvg.ZkPCCO0fCwmtqzoPmBrI2mpcVXM'
client.run(TOKEN,bot=True)
