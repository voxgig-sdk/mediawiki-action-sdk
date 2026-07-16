<?php
declare(strict_types=1);

// MediawikiAction SDK base feature

class MediawikiActionBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MediawikiActionContext $ctx, array $options): void {}
    public function PostConstruct(MediawikiActionContext $ctx): void {}
    public function PostConstructEntity(MediawikiActionContext $ctx): void {}
    public function SetData(MediawikiActionContext $ctx): void {}
    public function GetData(MediawikiActionContext $ctx): void {}
    public function GetMatch(MediawikiActionContext $ctx): void {}
    public function SetMatch(MediawikiActionContext $ctx): void {}
    public function PrePoint(MediawikiActionContext $ctx): void {}
    public function PreSpec(MediawikiActionContext $ctx): void {}
    public function PreRequest(MediawikiActionContext $ctx): void {}
    public function PreResponse(MediawikiActionContext $ctx): void {}
    public function PreResult(MediawikiActionContext $ctx): void {}
    public function PreDone(MediawikiActionContext $ctx): void {}
    public function PreUnexpected(MediawikiActionContext $ctx): void {}
}
