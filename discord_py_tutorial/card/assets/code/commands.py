# bot.py
import os

from discord.ext import commands

#create a new discord client
client = commands.Bot(command_prefix='$')

@client.command()
async def echo(ctx,echo):
	await ctx.send(echo)

@client.command()
async def add(ctx,x,y):
	to_send = 0
	
	#we gotta keep ourselfs safe from random inputs
	#try statements catch errors
	try:
		to_send = int(x)+int(y)
	except:
		pass

	await ctx.send(str(to_send))


@client.command()
async def argcount(ctx,*list_args):
	ctx.send('recived {0} args'.format(len(list_args)))
	for i in list_args:
		await ctx.send(i)

#events still work like they would normally
@client.event
async def on_ready():
	for guild in client.guilds:
		print(f'[*] Connected On : {guild.name}')	
		print('[*] READY')


#run the bot the same as we have been
TOKEN = 'OTY5OTQ3MjIzODU1MDk5OTA0.Ym0zvg.ZkPCCO0fCwmtqzoPmBrI2mpcVXM'

print('[*] attempting connection...')
client.run(TOKEN,bot=True)
