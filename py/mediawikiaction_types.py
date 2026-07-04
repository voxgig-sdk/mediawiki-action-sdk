# Typed models for the MediawikiAction SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Api:
    batchcomplete: Optional[str] = None
    edit: Optional[dict] = None
    error: Optional[dict] = None
    login: Optional[dict] = None
    query: Optional[dict] = None


@dataclass
class ApiLoadMatch:
    batchcomplete: Optional[str] = None
    edit: Optional[dict] = None
    error: Optional[dict] = None
    login: Optional[dict] = None
    query: Optional[dict] = None


@dataclass
class ApiCreateData:
    batchcomplete: Optional[str] = None
    edit: Optional[dict] = None
    error: Optional[dict] = None
    login: Optional[dict] = None
    query: Optional[dict] = None

