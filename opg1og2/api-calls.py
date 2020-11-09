import requests
import json




"""
collect access and refresh token through post rquest with payload to API:
"""

def collectToken(payload):
    url = 'http://52.57.200.125/api/token/'
    r = requests.post(url, data= payload)
    accessToken = r.json()['access']
    refreshToken = r.json()['refresh']
    return {'accessToken': accessToken,'refreshToken': refreshToken}


"""
collect new access token with the refresh token from tokenRequest request through
post request with refreshToken to API:
"""

def refreshAccess(refreshToken):
    url = 'http://52.57.200.125/api/token/refresh/'
    r = requests.post(url, data = refreshToken)
    refreshedToken = r.json()['access']
    return refreshedToken

"""
collect userinfo with JWT as autorization Bearer Token through post request to API,
can use getDataPayload with a payload, or if you have a valid token, you can use
getDataToken
"""
def getDataPayload(payload):
    url = 'http://52.57.200.125/users'
    authToken = collectToken(payload)['accessToken']
    header = {'Authorization': 'Bearer ' + authToken}
    r = requests.get(url, headers = header)
    return r.json()



def getDataToken(token):
    url = 'http://52.57.200.125/users'
    header = {'Authorization': 'Bearer ' + token}
    r = requests.get(url, headers = header)
    return r.json()



payload = {
    "username": "user",
    "password": "fabel0000"
}

print(collectToken(payload))



refreshToken = {'refresh': collectToken(payload)['refreshToken']}

print(refreshAccess(refreshToken))


print(getDataPayload(payload))






