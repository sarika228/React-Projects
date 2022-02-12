class Final(type):
    def _new_(meta,name,bases,attrs):
        if issubclass():
            raise TypeError
        return super()._new_(meta,name,bases,attrs)
class Sealed(metaclass=Final):pass
class ShouldFail(Sealed):pass
