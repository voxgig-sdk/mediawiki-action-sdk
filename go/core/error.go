package core

type MediawikiActionError struct {
	IsMediawikiActionError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMediawikiActionError(code string, msg string, ctx *Context) *MediawikiActionError {
	return &MediawikiActionError{
		IsMediawikiActionError: true,
		Sdk:              "MediawikiAction",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MediawikiActionError) Error() string {
	return e.Msg
}
