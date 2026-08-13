# MediawikiAction SDK utility: make_context

from projectname_sdk.core.context import MediawikiActionContext


def make_context_util(ctxmap, basectx):
    return MediawikiActionContext(ctxmap, basectx)
