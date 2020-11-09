import requests
from bs4 import BeautifulSoup



def enableSSO(urlSSO, urlAccess, payload):
    with requests.Session() as s:
        r = s.post(urlSSO, data = payload)
        r = s.post(urlAccess)

        

        return {'site_accessed': r.url, 'response_code': r}


urlSSO = "https://test.fabel.no/sso_login/sso_login.php/"

urlAccess = "https://test.fabel.no/minside/"


payload = {
    "username": "23160000",
    "password": "123123"
}

results = enableSSO(urlSSO, urlAccess, payload)

print(results)


soup = BeautifulSoup(results['response_code'].content, 'html.parser')
results = soup.find(class_='fabel_profile_info_small').get_text()
print(results)

