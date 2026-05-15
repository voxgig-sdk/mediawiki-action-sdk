# MediawikiAction SDK feature factory

from feature.base_feature import MediawikiActionBaseFeature
from feature.test_feature import MediawikiActionTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MediawikiActionBaseFeature(),
        "test": lambda: MediawikiActionTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
