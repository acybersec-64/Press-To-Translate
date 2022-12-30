import time
import pyautogui as pya
import keyboard
import requests
import pyperclip    
from python_translator import Translator
import os
import re
import io
from win10toast import ToastNotifier
import urllib.parse


translator = Translator()

notif = ToastNotifier()

class Translate(object):
    

    def __init__(self):
        self.lst = []


    

    def Handeler(self):  
        if keyboard.is_pressed(hotKey):
            self.on_press()
        


    
    
    def copy_clipboard(self):
        pyperclip.copy("")  # <- This prevents last copy replacing current copy of null.
        pya.hotkey('ctrl', 'c')
        time.sleep(.1)  # ctrl-c is usually very fast but your program may execute faster
        return pyperclip.paste()


    def double_click_copy(self):
        # double clicks on a position of the cursor
        pya.doubleClick(pya.position())
        return self.copy_clipboard()

    def on_press(self):
        self.double_click_copy()
        self.Word = pyperclip.paste()
        print("translating {}".format(self.Word))
        pattern = re.compile("[\sA-Za-z]+")
        if pattern.fullmatch(self.Word) is not None:
            DestinationLang = self.TranslateToPersian(1)
        
        try:
        
            notif.show_toast("Translated {} to :".format(self.Word),DestinationLang)

        except:
        
            pass
        
        
        
        # else:
        
        
        #     persian_sentences = self.TranslateToPersian(4)
            
        #     try:
            
        #         notif.show_toast("Translated to persian :",persian_sentences )
            
        #     except:
            
        #         pass

     
    def TranslateToPersian(self,id):    
                
        open("response.txt","w").write("")

        if (id == 4):

#            "D:\Program Files\Git\mingw64\bin\curl.exe" "https://translate.googleapis.com/translate_a/t?anno=3&client=te&format=html&v=1.0&key&sl=en&tl=fa&sp=nmt&tc=1&tk=878345.785575&mode=1"   --data-raw "q=How%20to%20Combine%20Shapes%20in%20Illustrator."   --compressed     > D:\\projects\\Translate\\response.txt

            os.system('node translate.js {}'.format(self.Word))
        
            with io.open("response.txt",'r',encoding='UTF-8') as resp:
                response = resp.read()
            
            return response
        try:
            os.system('curl "https://glosbe.com/{}/{}/{}" > %cd%\\response.txt'.format(FromThisLanguage,ToThisLanguage,urllib.parse.quote(self.Word)))
        except:
            notif.show_toast("couldnt translate  '"+self.Word+"'")
        with io.open("response.txt",'r',encoding='UTF-8') as resp:
            response = resp.read()
        response = response.replace("\n","")

        translated1 = re.findall('data-phrase="(.*?)"',response)
        translated2 = re.findall('lang="{}" dir="rtl" >(.*?)</h3>'.format(ToThisLanguage),response)
        
        # translated3 = (re.findall('<div lang="fa" dir="rtl" class=" dir--pl-2 w-2/3 text-gray-700 dense">(.*?)</div></li>',response))
            
        # ",".join(translated1 )+"     " + ",".join(translated2 )+"     " + ",".join(translated3 )
        if translated1 != []:
            
            if len(translated1) < 2:
                return  ",".join(translated1)
            else:
                translated1 = re.sub("[A-z]", "", ",".join(translated1))
                return  "".join(translated1)
        
        elif translated1 == []:
            print(translated2)
            return  ",".join(translated2)
            
        
            
        else:
            return "couldnt translate '"+self.Word+"'"

# requests.get("https://glosbe.com/fa/en/{}".format(PersianWord))

translate = Translate()
FromThisLanguage = input("""eg: fa = persian, en = english , zh = chinese , etc...\nFrom Which Language: """)
ToThisLanguage = input("""eg: fa = persian, en = english , zh = chinese , etc...\nTo Which Language: """)
hotKey = input("Whic keys or key pressed? ( eg: ctrl+alt+shift+t or insert and etc ... ) : ")
os.system("cls")
print("Allright im waiting for you to select any word with your mouse and then press '{}' to Translate from  this language '{}' to this language '{}'.".format(hotKey,FromThisLanguage,ToThisLanguage))
while True:
    translate.Handeler()