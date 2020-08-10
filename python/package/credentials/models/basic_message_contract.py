# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class BasicMessageContract(Model):
    """Basic message contract.

    :param connection_id: The connection identifier
    :type connection_id: str
    :param timestamp: The message timestamp
    :type timestamp: datetime
    :param text: The message text
    :type text: str
    :param direction: Possible values include: 'Incoming', 'Outgoing'
    :type direction: str or ~credentials.models.enum
    """

    _attribute_map = {
        'connection_id': {'key': 'connectionId', 'type': 'str'},
        'timestamp': {'key': 'timestamp', 'type': 'iso-8601'},
        'text': {'key': 'text', 'type': 'str'},
        'direction': {'key': 'direction', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(BasicMessageContract, self).__init__(**kwargs)
        self.connection_id = kwargs.get('connection_id', None)
        self.timestamp = kwargs.get('timestamp', None)
        self.text = kwargs.get('text', None)
        self.direction = kwargs.get('direction', None)
