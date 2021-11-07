from typing import Text, List, Optional, Dict, Any
from rasa_sdk.forms import FormValidationAction
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk import Tracker, Action
from dotenv import load_dotenv
import os
import requests
import json
import uuid

load_dotenv()


def get_env_var(key):
    env_var = os.getenv(key)
    if env_var is None:
        raise RuntimeError(f"Environment variable {key} was not found.")
    return env_var


class ValidateNewsletterForm(FormValidationAction):
    def name(self) -> Text:
        return "validate_newsletter_form"

    async def required_slots(
            self,
            slots_mapped_in_domain: List[Text],
            dispatcher: "CollectingDispatcher",
            tracker: "Tracker",
            domain: "DomainDict",
    ) -> Optional[List[Text]]:
        if not tracker.get_slot("can_ask_age"):
            slots_mapped_in_domain.remove("age")

        return slots_mapped_in_domain

# class ActionSayStuff(Action):

#     def name(self) -> Text:
#         return "action_say_stuff"
#
#     def run(self,
#             dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#         dispatcher.utter_message("Stuff")
#
#         return []
