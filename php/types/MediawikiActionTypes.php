<?php
declare(strict_types=1);

// Typed models for the MediawikiAction SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Api entity data model. */
class Api
{
    public ?string $batchcomplete = null;
    public ?array $continue = null;
    public ?array $edit = null;
    public ?array $error = null;
    public ?array $login = null;
    public ?array $query = null;
}

/** Match filter for Api#load (any subset of Api fields). */
class ApiLoadMatch
{
    public ?string $batchcomplete = null;
    public ?array $continue = null;
    public ?array $edit = null;
    public ?array $error = null;
    public ?array $login = null;
    public ?array $query = null;
}

/** Match filter for Api#create (any subset of Api fields). */
class ApiCreateData
{
    public ?string $batchcomplete = null;
    public ?array $continue = null;
    public ?array $edit = null;
    public ?array $error = null;
    public ?array $login = null;
    public ?array $query = null;
}

